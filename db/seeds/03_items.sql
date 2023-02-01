-- Items table seeds here.

INSERT INTO items (category_id, user_id, item_name, created_date, due_date, completed_date, priority, item_status)
VALUES (1, 1, 'The Shawshank Redemption', '2023-03-01', '2023-03-03', '2023-03-03', 5, FALSE);

INSERT INTO items (category_id, user_id, item_name, created_date, due_date, completed_date, priority, item_status) VALUES (2, 1, 'Try the sushi at Sushi Hiro', '2023-03-05', '2023-03-08', NULL, 4, TRUE);

INSERT INTO items (category_id, user_id, item_name, created_date, due_date, completed_date, priority, item_status) VALUES (3, 2, 'The Great Gatsby', '2023-03-15', '2023-03-022', '2023-03-20', 3, FALSE);

INSERT INTO items (category_id, user_id, item_name, created_date, due_date, completed_date, priority, item_status) VALUES (4, 4, 'New camera lens for photography', '2023-03-20', '2023-04-01', '2023-04-03', 2, FALSE);

INSERT INTO items (category_id, user_id, item_name, created_date, due_date, completed_date, priority, item_status) VALUES (1, 3, 'The Godfather', '2023-03-01', '2023-03-10', NULL, 5, TRUE);
