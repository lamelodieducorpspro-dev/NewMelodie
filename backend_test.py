#!/usr/bin/env python3
"""
Backend API tests for La Mélodie du Corps Next.js API
Tests all endpoints: newsletter, contact, root, and 404 handling
"""

import requests
import json
import random
import string
from datetime import datetime

# Base URL from .env NEXT_PUBLIC_BASE_URL
BASE_URL = "https://next-craft-2.preview.emergentagent.com/api"

def random_string(length=8):
    """Generate random string for unique emails"""
    return ''.join(random.choices(string.ascii_lowercase + string.digits, k=length))

def print_test_result(test_name, passed, details=""):
    """Print formatted test result"""
    status = "✅ PASS" if passed else "❌ FAIL"
    print(f"\n{status}: {test_name}")
    if details:
        print(f"  Details: {details}")

def test_root_endpoint():
    """Test GET /api/ - should return 200 with alive message"""
    print("\n" + "="*80)
    print("TEST 1: GET /api/ (root endpoint)")
    print("="*80)
    
    try:
        # Note: may redirect from /api/ to /api (308), follow redirects
        response = requests.get(f"{BASE_URL}/", allow_redirects=True, timeout=10)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "La Mélodie du Corps API is alive":
                print_test_result("Root endpoint", True, "Correct message returned")
                return True
            else:
                print_test_result("Root endpoint", False, f"Unexpected message: {data}")
                return False
        else:
            print_test_result("Root endpoint", False, f"Expected 200, got {response.status_code}")
            return False
    except Exception as e:
        print_test_result("Root endpoint", False, f"Exception: {str(e)}")
        return False

def test_newsletter_happy_path():
    """Test POST /api/newsletter with valid email"""
    print("\n" + "="*80)
    print("TEST 2: POST /api/newsletter (happy path)")
    print("="*80)
    
    try:
        email = f"test_newsletter_{random_string()}@example.com"
        payload = {
            "email": email,
            "source": "exit_intent"
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(
            f"{BASE_URL}/newsletter",
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            required_fields = ["id", "email", "source", "created_at"]
            missing_fields = [f for f in required_fields if f not in data]
            
            if missing_fields:
                print_test_result("Newsletter happy path", False, f"Missing fields: {missing_fields}")
                return False, None
            
            if data["email"] != email:
                print_test_result("Newsletter happy path", False, f"Email mismatch: {data['email']} != {email}")
                return False, None
            
            if data["source"] != "exit_intent":
                print_test_result("Newsletter happy path", False, f"Source mismatch: {data['source']}")
                return False, None
            
            if "_id" in data:
                print_test_result("Newsletter happy path", False, "MongoDB _id field present (should be excluded)")
                return False, None
            
            print_test_result("Newsletter happy path", True, f"Entry created with id: {data['id']}")
            return True, email
        else:
            print_test_result("Newsletter happy path", False, f"Expected 200, got {response.status_code}")
            return False, None
    except Exception as e:
        print_test_result("Newsletter happy path", False, f"Exception: {str(e)}")
        return False, None

def test_newsletter_idempotent(email):
    """Test POST /api/newsletter with duplicate email - should return existing entry"""
    print("\n" + "="*80)
    print("TEST 3: POST /api/newsletter (idempotent - duplicate email)")
    print("="*80)
    
    if not email:
        print_test_result("Newsletter idempotent", False, "No email from previous test")
        return False
    
    try:
        payload = {
            "email": email,
            "source": "exit_intent"
        }
        
        print(f"Payload (duplicate): {json.dumps(payload, indent=2)}")
        
        response = requests.post(
            f"{BASE_URL}/newsletter",
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data["email"] == email:
                print_test_result("Newsletter idempotent", True, "Returned existing entry (de-duped)")
                return True
            else:
                print_test_result("Newsletter idempotent", False, f"Email mismatch: {data['email']}")
                return False
        else:
            print_test_result("Newsletter idempotent", False, f"Expected 200, got {response.status_code}")
            return False
    except Exception as e:
        print_test_result("Newsletter idempotent", False, f"Exception: {str(e)}")
        return False

def test_newsletter_invalid_email():
    """Test POST /api/newsletter with invalid email"""
    print("\n" + "="*80)
    print("TEST 4: POST /api/newsletter (invalid email)")
    print("="*80)
    
    try:
        payload = {"email": "notanemail"}
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(
            f"{BASE_URL}/newsletter",
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 400:
            data = response.json()
            if "error" in data and "invalide" in data["error"].lower():
                print_test_result("Newsletter invalid email", True, f"Correct error: {data['error']}")
                return True
            else:
                print_test_result("Newsletter invalid email", False, f"Unexpected error message: {data}")
                return False
        else:
            print_test_result("Newsletter invalid email", False, f"Expected 400, got {response.status_code}")
            return False
    except Exception as e:
        print_test_result("Newsletter invalid email", False, f"Exception: {str(e)}")
        return False

def test_newsletter_missing_email():
    """Test POST /api/newsletter with missing email"""
    print("\n" + "="*80)
    print("TEST 5: POST /api/newsletter (missing email)")
    print("="*80)
    
    try:
        payload = {}
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(
            f"{BASE_URL}/newsletter",
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 400:
            data = response.json()
            if "error" in data:
                print_test_result("Newsletter missing email", True, f"Correct error: {data['error']}")
                return True
            else:
                print_test_result("Newsletter missing email", False, f"No error field in response: {data}")
                return False
        else:
            print_test_result("Newsletter missing email", False, f"Expected 400, got {response.status_code}")
            return False
    except Exception as e:
        print_test_result("Newsletter missing email", False, f"Exception: {str(e)}")
        return False

def test_newsletter_get():
    """Test GET /api/newsletter - should return array sorted by created_at desc"""
    print("\n" + "="*80)
    print("TEST 6: GET /api/newsletter (list subscribers)")
    print("="*80)
    
    try:
        response = requests.get(f"{BASE_URL}/newsletter", timeout=10)
        
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            
            if not isinstance(data, list):
                print_test_result("Newsletter GET", False, f"Expected array, got {type(data)}")
                return False
            
            print(f"Response: Array with {len(data)} entries")
            
            # Check no _id field present
            if data and any("_id" in item for item in data):
                print_test_result("Newsletter GET", False, "MongoDB _id field present (should be excluded)")
                return False
            
            # Check sorting (created_at desc)
            if len(data) > 1:
                dates = [item.get("created_at") for item in data if "created_at" in item]
                if dates == sorted(dates, reverse=True):
                    print_test_result("Newsletter GET", True, f"Returned {len(data)} entries, sorted correctly")
                else:
                    print_test_result("Newsletter GET", False, "Not sorted by created_at desc")
                    return False
            else:
                print_test_result("Newsletter GET", True, f"Returned {len(data)} entries")
            
            return True
        else:
            print_test_result("Newsletter GET", False, f"Expected 200, got {response.status_code}")
            return False
    except Exception as e:
        print_test_result("Newsletter GET", False, f"Exception: {str(e)}")
        return False

def test_contact_happy_path():
    """Test POST /api/contact with valid data"""
    print("\n" + "="*80)
    print("TEST 7: POST /api/contact (happy path)")
    print("="*80)
    
    try:
        email = f"test_contact_{random_string()}@example.com"
        payload = {
            "name": "Marie Dupont",
            "email": email,
            "phone": "0651166669",
            "subject": "Demande d'information",
            "message": "Bonjour, je souhaite en savoir plus sur vos accompagnements pour le SOPK."
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(
            f"{BASE_URL}/contact",
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            required_fields = ["id", "name", "email", "phone", "subject", "message", "created_at"]
            missing_fields = [f for f in required_fields if f not in data]
            
            if missing_fields:
                print_test_result("Contact happy path", False, f"Missing fields: {missing_fields}")
                return False
            
            if data["email"] != email:
                print_test_result("Contact happy path", False, f"Email mismatch: {data['email']} != {email}")
                return False
            
            if "_id" in data:
                print_test_result("Contact happy path", False, "MongoDB _id field present (should be excluded)")
                return False
            
            print_test_result("Contact happy path", True, f"Entry created with id: {data['id']}")
            return True
        else:
            print_test_result("Contact happy path", False, f"Expected 200, got {response.status_code}")
            return False
    except Exception as e:
        print_test_result("Contact happy path", False, f"Exception: {str(e)}")
        return False

def test_contact_missing_message():
    """Test POST /api/contact with missing message"""
    print("\n" + "="*80)
    print("TEST 8: POST /api/contact (missing message)")
    print("="*80)
    
    try:
        payload = {
            "name": "Test User",
            "email": "test@example.com",
            "message": ""
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(
            f"{BASE_URL}/contact",
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 400:
            data = response.json()
            if "error" in data:
                print_test_result("Contact missing message", True, f"Correct error: {data['error']}")
                return True
            else:
                print_test_result("Contact missing message", False, f"No error field in response: {data}")
                return False
        else:
            print_test_result("Contact missing message", False, f"Expected 400, got {response.status_code}")
            return False
    except Exception as e:
        print_test_result("Contact missing message", False, f"Exception: {str(e)}")
        return False

def test_contact_missing_name():
    """Test POST /api/contact with missing name"""
    print("\n" + "="*80)
    print("TEST 9: POST /api/contact (missing name)")
    print("="*80)
    
    try:
        payload = {
            "email": "test@example.com",
            "message": "Hello, this is a test message."
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(
            f"{BASE_URL}/contact",
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 400:
            data = response.json()
            if "error" in data:
                print_test_result("Contact missing name", True, f"Correct error: {data['error']}")
                return True
            else:
                print_test_result("Contact missing name", False, f"No error field in response: {data}")
                return False
        else:
            print_test_result("Contact missing name", False, f"Expected 400, got {response.status_code}")
            return False
    except Exception as e:
        print_test_result("Contact missing name", False, f"Exception: {str(e)}")
        return False

def test_contact_invalid_email():
    """Test POST /api/contact with invalid email"""
    print("\n" + "="*80)
    print("TEST 10: POST /api/contact (invalid email)")
    print("="*80)
    
    try:
        payload = {
            "name": "Test User",
            "email": "notanemail",
            "message": "Hello, this is a test message."
        }
        
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(
            f"{BASE_URL}/contact",
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 400:
            data = response.json()
            if "error" in data:
                print_test_result("Contact invalid email", True, f"Correct error: {data['error']}")
                return True
            else:
                print_test_result("Contact invalid email", False, f"No error field in response: {data}")
                return False
        else:
            print_test_result("Contact invalid email", False, f"Expected 400, got {response.status_code}")
            return False
    except Exception as e:
        print_test_result("Contact invalid email", False, f"Exception: {str(e)}")
        return False

def test_contact_get():
    """Test GET /api/contact - should return array sorted by created_at desc"""
    print("\n" + "="*80)
    print("TEST 11: GET /api/contact (list submissions)")
    print("="*80)
    
    try:
        response = requests.get(f"{BASE_URL}/contact", timeout=10)
        
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            
            if not isinstance(data, list):
                print_test_result("Contact GET", False, f"Expected array, got {type(data)}")
                return False
            
            print(f"Response: Array with {len(data)} entries")
            
            # Check no _id field present
            if data and any("_id" in item for item in data):
                print_test_result("Contact GET", False, "MongoDB _id field present (should be excluded)")
                return False
            
            # Check sorting (created_at desc)
            if len(data) > 1:
                dates = [item.get("created_at") for item in data if "created_at" in item]
                if dates == sorted(dates, reverse=True):
                    print_test_result("Contact GET", True, f"Returned {len(data)} entries, sorted correctly")
                else:
                    print_test_result("Contact GET", False, "Not sorted by created_at desc")
                    return False
            else:
                print_test_result("Contact GET", True, f"Returned {len(data)} entries")
            
            return True
        else:
            print_test_result("Contact GET", False, f"Expected 200, got {response.status_code}")
            return False
    except Exception as e:
        print_test_result("Contact GET", False, f"Exception: {str(e)}")
        return False

def test_unknown_route():
    """Test GET /api/does-not-exist - should return 404"""
    print("\n" + "="*80)
    print("TEST 12: GET /api/does-not-exist (404 handling)")
    print("="*80)
    
    try:
        response = requests.get(f"{BASE_URL}/does-not-exist", timeout=10)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 404:
            data = response.json()
            if "error" in data and "/does-not-exist" in data["error"]:
                print_test_result("Unknown route 404", True, f"Correct error: {data['error']}")
                return True
            else:
                print_test_result("Unknown route 404", False, f"Unexpected error message: {data}")
                return False
        else:
            print_test_result("Unknown route 404", False, f"Expected 404, got {response.status_code}")
            return False
    except Exception as e:
        print_test_result("Unknown route 404", False, f"Exception: {str(e)}")
        return False

def main():
    """Run all backend tests"""
    print("\n" + "="*80)
    print("BACKEND API TESTS - La Mélodie du Corps")
    print(f"Base URL: {BASE_URL}")
    print(f"Test started at: {datetime.now().isoformat()}")
    print("="*80)
    
    results = {}
    
    # Test 1: Root endpoint
    results["root_endpoint"] = test_root_endpoint()
    
    # Test 2-6: Newsletter endpoints
    results["newsletter_happy_path"], test_email = test_newsletter_happy_path()
    results["newsletter_idempotent"] = test_newsletter_idempotent(test_email)
    results["newsletter_invalid_email"] = test_newsletter_invalid_email()
    results["newsletter_missing_email"] = test_newsletter_missing_email()
    results["newsletter_get"] = test_newsletter_get()
    
    # Test 7-11: Contact endpoints
    results["contact_happy_path"] = test_contact_happy_path()
    results["contact_missing_message"] = test_contact_missing_message()
    results["contact_missing_name"] = test_contact_missing_name()
    results["contact_invalid_email"] = test_contact_invalid_email()
    results["contact_get"] = test_contact_get()
    
    # Test 12: 404 handling
    results["unknown_route_404"] = test_unknown_route()
    
    # Summary
    print("\n" + "="*80)
    print("TEST SUMMARY")
    print("="*80)
    
    passed = sum(1 for v in results.values() if v)
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status}: {test_name}")
    
    print("\n" + "="*80)
    print(f"TOTAL: {passed}/{total} tests passed ({passed*100//total}%)")
    print("="*80)
    
    return passed == total

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
