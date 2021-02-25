use training;

/*2.22
select
OrderID,
CustomerID,
ShipCountry
from
Orders
where
ShipCountry in ('France','Belgium')
*/

/* 2.23
select
OrderID,
CustomerID,
ShipCountry
from
Orders
where
ShipCountry in ('Brazil','Mexico','Argentina','Venezuela')
*/

/*
2.24
select 
FirstName,
LastName,
Title,
BirthDate
from 
Employees
order by
BirthDate
*/

/*
2.25
select 
FirstName,
LastName,
Title,
date(BirthDate) As BirthDate
from 
Employees
order by
BirthDate
*/

