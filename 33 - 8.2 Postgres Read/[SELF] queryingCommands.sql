--WHERE <column> =
SELECT rice_production FROM world_food WHERE country = 'United States';

--WHERE >/</<=/>=
SELECT country FROM world_food WHERE wheat_production > 20;

--WHERE <column> LIKE
SELECT country FROM world_food WHERE country LIKE 'U' || '%'; --Countries whose names begin with 'U'
SELECT country FROM world_food WHERE country LIKE '%' || 'a'; --Countries whose names end with 'a'