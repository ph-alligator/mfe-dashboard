import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@org/ui';

export function AnalyticsPage() {
  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Analytics</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Detailed metrics and trends.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Coming soon</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            Charts and reports will live in this remote.
          </p>
          <Link to="..">
            <Button type="button" variant="outline">
              Back to dashboard
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
