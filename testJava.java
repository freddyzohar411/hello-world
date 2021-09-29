String query = "SELECT account_balance FROM user_data WHERE user_name = "
             + request.getParameter("clientName");
try {
    Statement statement = connection.createStatement( ... );
    ResultSet results = statement.executeQuery( query );
}
