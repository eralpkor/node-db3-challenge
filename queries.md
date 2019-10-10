# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
```sql
SELECT ProductName, CategoryName
FROM Products AS p
JOIN Categories AS c ON p.CategoryID = c.CategoryID;
```

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
```sql
SELECT OrderID, ShipperName
FROM Orders AS o
JOIN Shippers AS s ON o.ShipperID = s.ShipperID
WHERE OrderDate < '1997-01-09';
```

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
```sql
SELECT ProductName, Quantity
FROM OrderDetails AS o
JOIN Products AS p ON o.productid = p.productid
WHERE orderid = 10251
ORDER BY [Product Name];
```

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
```sql
SELECT OrderID, CustomerName AS Customer, LastName AS [Employee's Last Name]
FROM Orders AS o
JOIN Customers AS c on o.Customerid = c.customerid
JOIN employees AS e on o.employeeid = e.employeeid;
```

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
```sql
SELECT CategoryName, COUNT(*) AS Count
FROM products AS p
JOIN categories AS c ON p.categoryid = c.categoryid
GROUP BY categoryname;
```

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
```sql
SELECT o.OrderID, COUNT(*) AS [Item Count]
FROM orders AS o
JOIN orderdetails as d ON o.orderid = d.orderid
GROUP BY o.orderid;
```