import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@org/ui';

export function DashboardHomePage() {
  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Overview and analytics for your workspace.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: 'Revenue', value: '$12,450' },
          { label: 'Active users', value: '1,284' },
          { label: 'Conversion', value: '3.2%' },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <CardTitle className="text-3xl">{stat.value}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick actions</CardTitle>
        </CardHeader>
        <CardContent>
          <Link to="analytics">
            <Button type="button" variant="secondary">
              View analytics
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
