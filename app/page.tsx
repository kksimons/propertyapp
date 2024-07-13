import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Button variant='outline' size='lg' className="capitalize m-8">
        Click me
      </Button>
    </div>
  );
}
