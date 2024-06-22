export const DashboardSelect = (role) => {
  switch (role) {
    case "ADMIN":
      return <h1>Admin</h1>
    case "TECHNICIAN":
      return <h1>TECHNICIAN</h1>
    default:
      return <h1>User</h1>
  }
};
