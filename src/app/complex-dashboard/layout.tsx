export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>

      <div className="flex">
        <div className="w-1/3">{users}</div>
        <div className="w-1/3">{revenue}</div>
        <div className="w-1/3">{notifications}</div>
      </div>
    </>
  );
}
