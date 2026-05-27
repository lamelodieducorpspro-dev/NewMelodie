import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Navbar placeholder */}
      <div className="h-16 bg-cream border-b" />
      <div className="container py-8">
        {/* Hero section skeleton */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7 space-y-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-12 w-3/4 max-w-md" />
            <Skeleton className="h-24 w-full" />
            <div className="flex gap-4 pt-2">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-40" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <Skeleton className="aspect-[4/3] w-full rounded-[2rem]" />
          </div>
        </div>
        {/* Content sections skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-8 w-1/2 mb-6" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="aspect-video w-full rounded-2xl" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-24 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
