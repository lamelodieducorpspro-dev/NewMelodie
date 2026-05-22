#====================================================================================================
# START - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================

# THIS SECTION CONTAINS CRITICAL TESTING INSTRUCTIONS FOR BOTH AGENTS
# BOTH MAIN_AGENT AND TESTING_AGENT MUST PRESERVE THIS ENTIRE BLOCK

# Communication Protocol:
# If the `testing_agent` is available, main agent should delegate all testing tasks to it.
#
# You have access to a file called `test_result.md`. This file contains the complete testing state
# and history, and is the primary means of communication between main and the testing agent.
#
# Main and testing agents must follow this exact format to maintain testing data. 
# The testing data must be entered in yaml format Below is the data structure:
# 
## user_problem_statement: {problem_statement}
## backend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.py"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## frontend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.js"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## metadata:
##   created_by: "main_agent"
##   version: "1.0"
##   test_sequence: 0
##   run_ui: false
##
## test_plan:
##   current_focus:
##     - "Task name 1"
##     - "Task name 2"
##   stuck_tasks:
##     - "Task name with persistent issues"
##   test_all: false
##   test_priority: "high_first"  # or "sequential" or "stuck_first"
##
## agent_communication:
##     -agent: "main"  # or "testing" or "user"
##     -message: "Communication message between agents"

# Protocol Guidelines for Main agent
#
# 1. Update Test Result File Before Testing:
#    - Main agent must always update the `test_result.md` file before calling the testing agent
#    - Add implementation details to the status_history
#    - Set `needs_retesting` to true for tasks that need testing
#    - Update the `test_plan` section to guide testing priorities
#    - Add a message to `agent_communication` explaining what you've done
#
# 2. Incorporate User Feedback:
#    - When a user provides feedback that something is or isn't working, add this information to the relevant task's status_history
#    - Update the working status based on user feedback
#    - If a user reports an issue with a task that was marked as working, increment the stuck_count
#    - Whenever user reports issue in the app, if we have testing agent and task_result.md file so find the appropriate task for that and append in status_history of that task to contain the user concern and problem as well 
#
# 3. Track Stuck Tasks:
#    - Monitor which tasks have high stuck_count values or where you are fixing same issue again and again, analyze that when you read task_result.md
#    - For persistent issues, use websearch tool to find solutions
#    - Pay special attention to tasks in the stuck_tasks list
#    - When you fix an issue with a stuck task, don't reset the stuck_count until the testing agent confirms it's working
#
# 4. Provide Context to Testing Agent:
#    - When calling the testing agent, provide clear instructions about:
#      - Which tasks need testing (reference the test_plan)
#      - Any authentication details or configuration needed
#      - Specific test scenarios to focus on
#      - Any known issues or edge cases to verify
#
# 5. Call the testing agent with specific instructions referring to test_result.md
#
# IMPORTANT: Main agent must ALWAYS update test_result.md BEFORE calling the testing agent, as it relies on this file to understand what to test next.

#====================================================================================================
# END - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================



#====================================================================================================
# Testing Data - Main Agent and testing sub agent both should log testing data below this section
#====================================================================================================

user_problem_statement: |
  Convert the React (CRA) + FastAPI (Python) site "La Mélodie du Corps"
  (https://github.com/lamelodieducorpspro-dev/Melodie) into a fully Next.js full-stack app.
  Frontend AND backend both handled inside Next.js. Keep Resend email integration
  (newsletter guide + contact form notifications).

backend:
  - task: "GET /api/ root endpoint"
    implemented: true
    working: true
    file: "app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: true
        agent: "main"
        comment: "Returns {message: 'La Mélodie du Corps API is alive'}. Verified via curl."
      - working: true
        agent: "testing"
        comment: "✅ Comprehensive test passed. GET /api/ returns 200 with correct JSON message. Handles 308 redirect correctly."

  - task: "POST /api/newsletter - subscribe + send guide via Resend"
    implemented: true
    working: true
    file: "app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: true
        agent: "main"
        comment: "Stores in Mongo (newsletter collection), de-dupes on email, sends guide email via Resend. Verified via curl (POST returned entry with UUID). Direct Resend test from CLI returned email id - integration confirmed."
      - working: true
        agent: "testing"
        comment: "✅ All tests passed. Happy path: returns 200 with id/email/source/created_at, no _id field. Idempotent: duplicate email returns existing entry (same id). Invalid email: returns 400 'Email invalide'. Missing email: returns 400. Email sending is fire-and-forget (not verified per requirements)."

  - task: "GET /api/newsletter - list subscribers"
    implemented: true
    working: true
    file: "app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "low"
    needs_retesting: false
    status_history:
      - working: true
        agent: "main"
        comment: "Returns sorted list from Mongo."
      - working: true
        agent: "testing"
        comment: "✅ Test passed. Returns 200 with array of entries, sorted by created_at desc, no _id field present."

  - task: "POST /api/contact - submit form + send 2 emails via Resend"
    implemented: true
    working: true
    file: "app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: true
        agent: "main"
        comment: "Validates name/email/message, stores in Mongo (contacts collection), sends notification email to Apolline + confirmation email to client via Resend. Verified via curl."
      - working: true
        agent: "testing"
        comment: "✅ All tests passed. Happy path: returns 200 with full entry (id/name/email/phone/subject/message/created_at), no _id field. Missing message: returns 400. Missing name: returns 400. Invalid email: returns 400. All validation working correctly. Email sending is fire-and-forget (not verified per requirements)."

  - task: "GET /api/contact - list submissions"
    implemented: true
    working: true
    file: "app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "low"
    needs_retesting: false
    status_history:
      - working: true
        agent: "main"
        comment: "Returns sorted list from Mongo."
      - working: true
        agent: "testing"
        comment: "✅ Test passed. Returns 200 with array of entries, sorted by created_at desc, no _id field present."

  - task: "404 handling for unknown routes"
    implemented: true
    working: true
    file: "app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "medium"
    needs_retesting: false
    status_history:
      - working: true
        agent: "testing"
        comment: "✅ Test passed. GET /api/does-not-exist returns 404 with {error: 'Route /does-not-exist not found'}."

frontend:
  - task: "Convert React Router pages to Next.js App Router"
    implemented: true
    working: true
    file: "app/**/page.js + components/pages/*.jsx"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: true
        agent: "main"
        comment: "All 14 pages converted: /, /specialites/sopk, /specialites/endometriose, /specialites/menopause, /accompagnement, /yoga, /tarifs, /faq, /a-propos, /contact, /cgv, /mentions-legales, /politique-confidentialite, /politique-cookies. react-router-dom replaced with next/link + custom NavLink using usePathname."

  - task: "Site Layout (Header, Footer, WhatsAppFAB, ExitIntentPopup, ReassuranceBanner)"
    implemented: true
    working: true
    file: "components/site/*.jsx + app/layout.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: true
        agent: "main"
        comment: "Root layout wraps all pages with site Layout. Verified visually via screenshot - header sticky, dropdown for Mes spécialités, WhatsApp FAB present, fonts (Cormorant Garamond + Manrope) loading."

  - task: "Design system (colors, fonts, btn classes, marquee)"
    implemented: true
    working: true
    file: "app/globals.css + tailwind.config.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: true
        agent: "main"
        comment: "Forest/sage/terracotta/sand/cream tokens, Cormorant Garamond + Manrope fonts, btn-primary/secondary, marquee animation - all working as confirmed by screenshot of home page."

  - task: "301 redirects from old Wix URLs"
    implemented: true
    working: true
    file: "next.config.js"
    stuck_count: 0
    priority: "medium"
    needs_retesting: false
    status_history:
      - working: true
        agent: "main"
        comment: "Configured in next.config.js: /sopk, /endometriose, /menopause, /apropos, /prendre-rdv, etc. all redirect to canonical URLs."

metadata:
  - resend_api_key_configured: true
  - resend_direct_test: "Returned email id e31b48d9-d934-49ef-b04c-264156489606 - integration confirmed working"
  - from_email: "contact@lamelodieducorps.com (domain verified on Resend)"
  - notify_email: "lamelodieducorps.pro@gmail.com"
  - mongo_db_name: "melodie_du_corps"
  - collections: ["newsletter", "contacts"]

test_plan:
  current_focus:
    - "Backend API endpoints (newsletter + contact) — please test full happy path + edge cases (invalid email, missing fields, idempotent newsletter subscribe)"
  stuck_tasks: []
  test_all: false
  test_priority: "high_first"

agent_communication:
  - agent: "main"
    message: |
      MVP conversion complete. 14 pages converted from CRA+FastAPI to Next.js full-stack.
      Resend integration verified working with direct API test (sent a test email successfully).
      All API endpoints respond correctly via curl. UI matches original design (verified via screenshot).
      Please backend-test: POST /api/newsletter (new + duplicate), POST /api/contact (valid + missing fields + invalid email), GET listing endpoints, 404 on unknown routes.
  - agent: "testing"
    message: |
      ✅ BACKEND TESTING COMPLETE - ALL TESTS PASSED (12/12)
      
      Comprehensive backend API testing completed successfully. All endpoints working correctly:
      
      1. GET /api/ → ✅ Returns 200 with correct alive message
      2. POST /api/newsletter → ✅ Happy path, idempotent (de-dupe), invalid email validation, missing email validation all working
      3. GET /api/newsletter → ✅ Returns sorted array, no _id field
      4. POST /api/contact → ✅ Happy path, missing name/message/invalid email validation all working
      5. GET /api/contact → ✅ Returns sorted array, no _id field
      6. 404 handling → ✅ Unknown routes return proper 404 error
      
      No server-side errors in /var/log/supervisor/nextjs.out.log. All API responses match specifications.
      Email sending is fire-and-forget (not verified per requirements). MongoDB integration working correctly.
      
      Backend is production-ready. No critical issues found.

