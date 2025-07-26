import Dashboard from "@/components/dashboard/Dashboard"
import AuthGuard from "@/components/auth-guard"

export default function DashboardPage() {
  return (
    <AuthGuard>
      <Dashboard />
    </AuthGuard>
  )
} 