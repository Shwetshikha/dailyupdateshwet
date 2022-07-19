USE shikha;
Create TABLE employee_information (
employee_id INT(20) NOT NULL PRIMARY KEY,
Swipe_in_time VARCHAR(50)  NULL,
Swipe_out_time VARCHAR(50)  NULL);

USE shikha;
Create TABLE employee_information (
employee_id INT(20) NOT NULL PRIMARY KEY,
Swipe_in_time VARCHAR(50)  NULL,
Swipe_out_time VARCHAR(50)  NULL);

USE shikha;
INSERT INTO employee (employee_id, Name, Office)
VALUES
(1, 'SHWET SHIKHA', 'NOIDA'),
(2, 'MANVI', 'NOIDA'),
(3, 'SHUBHAM', 'NOIDA'),
(4, 'ABHAY', 'NOIDA'),
(5, 'AMIT', 'NOIDA'),
(6, 'SAGNIK', 'NOIDA'),
(7, 'LAKSHIT', 'GURGAON'),
(8, 'HRITHIK', 'GURGAON'),
(9, 'SAIF', 'GURGOAN'),
(10, 'SURAJ', 'NOIDA');

USE shikha;
INSERT INTO employee_information (employee_id, Swipe_in_time, Swipe_out_time)
VALUES
(1, '9:00', '6:00'),
(2, '9:00', '6:00'),
(3, '9:00', '6:00'),
(4, '' ,''),
(5, '9:00', '6:00'),
(6, '9:00', '6:00'),
(7, '', ''),
(8, '9:00', '6:00'),
(9, '', ''),
(10, '', '');

USE shikha;
SELECT e.office, count(e.office) from
employee e 
LEFT JOIN employee_information ei
ON e.employee_id = ei.employee_id
group by e.office;

USE shikha;
SELECT e.office, count(e.office) FROM
employee e 
LEFT JOIN employee_information ei
ON e.employee_id = ei.employee_id
WHERE Swipe_in_time IS NULL
GROUP BY e.office;

USE shikha;
SELECT count(e.office)
FROM employee e
LEFT JOIN employee_information ei
ON e.employee_id= ei.employee_id
WHERE swipe_in_time IS NULL;