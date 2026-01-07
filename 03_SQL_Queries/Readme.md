# SQL Practice – 50 Queries

```sql
SHOW TABLES;
SELECT * FROM actor;
SELECT * FROM movie;
SELECT * FROM movie_cast;
SELECT * FROM movie_direction;
SELECT * FROM movie_reviewer;
SELECT * FROM movie_rating;
SELECT * FROM director;
SELECT * FROM movie_genres;
SELECT * FROM genres;
```

## 1. Write a SQL query to find the name and year of the movies. Return movie title, movie release year.
```sql
SELECT 
    mov_title, mov_year
FROM
    movie;
```

## Output

| mov_title                | mov_year |
|--------------------------|----------|
| Vertigo                  | 1958     |
| The Innocents            | 1961     |
| Lawrence of Arabia       | 1962     |
| The Deer Hunter          | 1978     |
| Amadeus                  | 1984     |
| Blade Runner             | 1982     |
| Eyes Wide Shut           | 1999     |
| The Usual Suspects       | 1995     |
| Chinatown                | 1974     |
| Boogie Nights            | 1997     |
| Annie Hall               | 1977     |
| Princess Mononoke        | 1997     |
| The Shawshank Redemption | 1994     |
| American Beauty          | 1999     |
| Titanic                  | 1997     |
| Good Will Hunting        | 1997     |
| Deliverance              | 1972     |
| Trainspotting            | 1996     |
| The Prestige             | 2006     |
| Donnie Darko             | 2001     |
| Slumdog Millionaire      | 2008     |
| Aliens                   | 1986     |
| Beyond the Sea           | 2004     |
| Avatar                   | 2009     |
| Seven Samurai            | 1954     |
| Spirited Away            | 2001     |
| Back to the Future       | 1985     |
| Braveheart               | 1995     |

## 2. Write a SQL query to find when the movie 'American Beauty' released. Return movie release year.
```sql
SELECT 
    mov_year
FROM
    movie
WHERE
    mov_title = 'American Beauty';
```

## Output

| mov_year |
|----------|
| 1999     |

## 3. Write a SQL query to find the movie that was released in 1999. Return movie title.
```sql
SELECT 
    mov_title
FROM
    movie
WHERE
    mov_year = 1999;
```

## Output

| mov_title       |
|-----------------|
| Eyes Wide Shut  |
| American Beauty |

## 4. Write a SQL query to find those movies, which were released before 1998. Return movie title.
```sql
SELECT 
    mov_title
FROM
    movie
WHERE
    mov_year < 1998;
```

## Output

| mov_title                |
|--------------------------|
| Vertigo                  |
| The Innocents            |
| Lawrence of Arabia       |
| The Deer Hunter          |
| Amadeus                  |
| Blade Runner             |
| The Usual Suspects       |
| Chinatown                |
| Boogie Nights            |
| Annie Hall               |
| Princess Mononoke        |
| The Shawshank Redemption |
| Titanic                  |
| Good Will Hunting        |
| Deliverance              |
| Trainspotting            |
| Aliens                   |
| Seven Samurai            |
| Back to the Future       |
| Braveheart               |

## 5. Write a SQL query to find the name of all reviewers and movies together in a single list.
```sql
SELECT 
    rev_name, mov_title
FROM
    movie_reviewer,
    movie;
```

## Output

| name                     |
|--------------------------|
| Righty Sock              |
| Jack Malvern             |
| Flagrant Baronessa       |
| Alec Shaw                |
|                          |
| Victor Woeltjen          |
| Simon Wright             |
| Neal Wruck               |
| Paul Monks               |
| Mike Salvati             |
| Wesley S. Walker         |
| Sasha Goldshtein         |
| Josh Cates               |
| Krug Stillo              |
| Scott LeBrun             |
| Hannah Steele            |
| Vincent Cadena           |
| Brandt Sponseller        |
| Richard Adams            |
| Vertigo                  |
| The Innocents            |
| Lawrence of Arabia       |
| The Deer Hunter          |
| Amadeus                  |
| Blade Runner             |
| Eyes Wide Shut           |
| The Usual Suspects       |
| Chinatown                |
| Boogie Nights            |
| Annie Hall               |
| Princess Mononoke        |
| The Shawshank Redemption |
| American Beauty          |
| Titanic                  |
| Good Will Hunting        |
| Deliverance              |
| Trainspotting            |
| The Prestige             |
| Donnie Darko             |
| Slumdog Millionaire      |
| Aliens                   |
| Beyond the Sea           |
| Avatar                   |
| Seven Samurai            |
| Spirited Away            |
| Back to the Future       |
| Braveheart               |

## 6. Write a SQL query to find all reviewers who have rated seven or more stars to their rating. Return reviewer name.
```sql
SELECT 
    rev_name, rev_stars
FROM
    movie_reviewer
        INNER JOIN
    movie_rating ON movie_rating.rev_id = movie_reviewer.rev_id
WHERE
    rev_stars > 7;
```

## Output

| rev_name           | rev_stars |
|--------------------|-----------|
| Righty Sock        | 8.4       |
| Jack Malvern       | 7.9       |
| Flagrant Baronessa | 8.3       |
|                    | 8.2       |
| Simon Wright       | 8.6       |
| Mike Salvati       | 8.1       |
|                    | 8.4       |
| Righty Sock        | 7.7       |
| Hannah Steele      | 8.1       |
| Vincent Cadena     | 8.0       |
| Brandt Sponseller  | 8.4       |
| Victor Woeltjen    | 7.3       |
| Krug Stillo        | 7.7       |

## 7. Write a SQL query to find the movies without any rating. Return movie title.
```sql
SELECT 
    mov_title
FROM
    movie_rating
        INNER JOIN
    movie ON movie_rating.mov_id = movie.mov_id
WHERE
    num_o_ratings IS NULL;
```

## Output

| mov_title         |
|-------------------|
| Princess Mononoke |
| Avatar            |

## 8. Write a SQL query to find the movies with ID 905 or 907 or 917. Return movie title.
```sql
SELECT 
    mov_title
FROM
    movie
WHERE
    mov_id = 905 OR mov_id = 907
        OR mov_id = 917;
```

## Output

Empty set

## 9. Write a SQL query to find the movie titles that contain the word 'Boogie Nights'. Sort the result-set in ascending order by movie year. Return movie ID, movie title and movie release year.
```sql
SELECT 
    mov_id, mov_title, mov_year
FROM
    movie
WHERE
    mov_title = 'Boogie Nights'
ORDER BY mov_year;
```

## Output

| mov_id | mov_title     | mov_year |
|--------|---------------|----------|
| 10     | Boogie Nights | 1997     |

## 10. Write a SQL query to find those actors with the first name 'Woody' and the last name 'Allen'. Return actor ID.
```sql
SELECT 
    act_id
FROM
    actor
WHERE
    act_fname = 'Woody'
        AND act_lname = 'Allen';
```

## Output

| act_id |
|--------|
| 11     |

## 11. Write a SQL query to find the actors who played a role in the movie 'Annie Hall'. Return all the fields of actor table.
```sql
SELECT 
    *
FROM
    actor
WHERE
    act_id = (SELECT 
            act_id
        FROM
            movie_cast
        WHERE
            mov_id = (SELECT 
                    mov_id
                FROM
                    movie
                WHERE
                    mov_title = 'Annie Hall'));
```

## Output

| act_id | act_fname | act_lname | act_gender |
|--------|-----------|-----------|------------|
| 11     | Woody     | Allen     | M          |

## 12. Write a SQL query to find the director of a film that cast a role in 'Eyes Wide Shut'. Return director first name, last name.
```sql
SELECT 
    dir_fname, dir_lname
FROM
    director
WHERE
    dir_id = (SELECT 
            dir_id
        FROM
            movie_direction
        WHERE
            mov_id = (SELECT 
                    mov_id
                FROM
                    movie
                WHERE
                    mov_title = 'Eyes Wide Shut'));
```

## Output

| dir_fname | dir_lname |
|-----------|-----------|
| Stanley   | Kubrick   |

## 13. Write a SQL query to find those movies that have been released in countries other than the United Kingdom. Return movie title, movie year, movie time, and date of release, releasing country.
```sql
SELECT 
    mov_title, mov_year, mov_time, mov_dt_rel
FROM
    movie
WHERE
    mov_rel_country != 'UK';
```

## Output

| mov_title     | mov_year | mov_time | mov_dt_rel |
|---------------|----------|----------|------------|
| The Innocents | 1961     | 100      | 1962-02-19 |
| Annie Hall    | 1977     | 93       | 1977-04-20 |
| Seven Samurai | 1954     | 207      | 1954-04-26 |

## 14. Write a SQL query to find for movies whose reviewer is unknown. Return movie title, year, release date, director first name, last name, actor first name, last name.
```sql
SELECT 
    m.mov_title,
    m.mov_year,
    m.mov_dt_rel,
    d.dir_fname,
    d.dir_lname,
    a.act_fname,
    a.act_lname
FROM
    movie m
        JOIN
    movie_direction md ON m.mov_id = md.mov_id
        JOIN
    director d ON md.dir_id = d.dir_id
        JOIN
    movie_cast mc ON m.mov_id = mc.mov_id
        JOIN
    actor a ON mc.act_id = a.act_id
WHERE
    m.mov_id IN (SELECT 
            mr.mov_id
        FROM
            movie_rating mr
                LEFT JOIN
            movie_reviewer r ON mr.rev_id = r.rev_id
        WHERE
            r.rev_name IS NULL OR r.rev_name = '');
```

## Output

| mov_title         | mov_year | mov_dt_rel | dir_fname | dir_lname | act_fname | act_lname |
|-------------------|----------|------------|-----------|-----------|-----------|-----------|
| Blade Runner      | 1982     | 1982-09-09 | Ridley    | Scott     | Harrison  | Ford      |
| Princess Mononoke | 1997     | 2001-10-19 | Hayao     | Miyazaki  | Claire    | Danes     |

## 15. Write a SQL query to find those movies directed by the director whose first name is Woddy and last name is Allen. Return movie title.
```sql
SELECT 
    mov_title
FROM
    movie
WHERE
    mov_id = (SELECT 
            mov_id
        FROM
            movie_direction
        WHERE
            dir_id = (SELECT 
                    dir_id
                FROM
                    director
                WHERE
                    dir_fname = 'Woody'
                        AND dir_lname = 'Allen'));
```

## Output

| mov_title  |
|------------|
| Annie Hall |

## 16. Write a SQL query to determine those years in which there was at least one movie that received a rating of at least three stars. Sort the result-set in ascending order by movie year. Return movie year.
```sql
SELECT 
    mov_year
FROM
    movie
WHERE
    mov_id IN (SELECT 
            mov_id
        FROM
            movie_rating
        WHERE
            rev_stars >= 3)
ORDER BY mov_year;
```

## Output

| mov_year |
|----------|
| 1954     |
| 1958     |
| 1961     |
| 1962     |
| 1977     |
| 1982     |
| 1986     |
| 1995     |
| 1997     |
| 1997     |
| 1997     |
| 1997     |
| 1999     |
| 2001     |
| 2004     |
| 2008     |
| 2009     |

## 17. Write a SQL query to search for movies that do not have any ratings. Return movie title.
```sql
SELECT 
    mov_title
FROM
    movie
WHERE
    mov_id IN (SELECT 
            mov_id
        FROM
            movie_rating
        WHERE
            num_o_ratingS IS NULL);
```

## Output

| mov_title         |
|-------------------|
| Princess Mononoke |
| Avatar            |

## 18. Write a SQL query to find those reviewers who have not given a rating to certain films. Return reviewer name.
```sql
SELECT 
    rev_name
FROM
    movie_reviewer
WHERE
    rev_id IN (SELECT 
            rev_id
        FROM
            movie_rating
        WHERE
            num_o_ratings IS NULL);
```

## Output

| rev_name        |
|-----------------|
| Victor Woeltjen |
|                 |

## 19. Write a SQL query to find movies that have been reviewed by a reviewer and received a rating. Sort the result-set in ascending order by reviewer name, movie title, review Stars. Return reviewer name, movie title, review Stars.
```sql
SELECT 
    r.rev_name, m.mov_title, mr.rev_stars
FROM
    movie_rating mr
        JOIN
    movie m ON mr.mov_id = m.mov_id
        JOIN
    movie_reviewer r ON mr.rev_id = r.rev_id
WHERE
    mr.rev_stars IS NOT NULL
ORDER BY r.rev_name ASC , m.mov_title ASC , mr.rev_stars ASC;
```

## Output

| rev_name           | mov_title           | rev_stars |
|-------------------|---------------------|-----------|
|                    | Blade Runner        | 8.2       |
|                    | Princess Mononoke   | 8.4       |
| Brandt Sponseller  | Aliens              | 8.4       |
| Flagrant Baronessa | Lawrence of Arabia  | 8.3       |
| Hannah Steele      | Donnie Darko        | 8.1       |
| Jack Malvern       | The Innocents       | 7.9       |
| Josh Cates         | Good Will Hunting   | 4.0       |
| Krug Stillo        | Seven Samurai       | 7.7       |
| Mike Salvati       | Annie Hall          | 8.1       |
| Paul Monks         | Boogie Nights       | 3.0       |
| Richard Adams      | Beyond the Sea      | 6.7       |
| Righty Sock        | Titanic             | 7.7       |
| Righty Sock        | Vertigo             | 8.4       |
| Sasha Goldshtein   | American Beauty     | 7.0       |
| Simon Wright       | The Usual Suspects  | 8.6       |
| Victor Woeltjen    | Avatar              | 7.3       |
| Vincent Cadena     | Slumdog Millionaire | 8.0       |

## 20. Write a SQL query to find movies that have been reviewed by a reviewer and received a rating. Group the result set on reviewer's name, movie title. Return reviewer's name, movie title.
```sql
SELECT
    r.rev_name AS reviewer_name,
    (
        SELECT m.mov_title
        FROM movie m
        WHERE m.mov_id = mr.mov_id
    ) AS movie_title
FROM movie_rating mr,
     movie_reviewer r
WHERE mr.rev_id = r.rev_id
  AND mr.rev_stars IS NOT NULL
GROUP BY r.rev_name, mr.mov_id;
```

## Output

| reviewer_name      | movie_title         |
|-------------------|---------------------|
|                    | Blade Runner        |
|                    | Princess Mononoke   |
| Brandt Sponseller  | Aliens              |
| Flagrant Baronessa | Lawrence of Arabia  |
| Hannah Steele      | Donnie Darko        |
| Jack Malvern       | The Innocents       |
| Josh Cates         | Good Will Hunting   |
| Krug Stillo        | Seven Samurai       |
| Mike Salvati       | Annie Hall          |
| Paul Monks         | Boogie Nights       |
| Richard Adams      | Beyond the Sea      |
| Righty Sock        | Vertigo             |
| Righty Sock        | Titanic             |
| Sasha Goldshtein   | American Beauty     |
| Simon Wright       | The Usual Suspects  |
| Victor Woeltjen    | Avatar              |
| Vincent Cadena     | Slumdog Millionaire |

## 21. Write a SQL query to find those movies, which have received highest number of stars. Group the result set on movie title and sorts the result-set in ascending order by movie title. Return movie title and maximum number of review stars.
```sql
SELECT
    m.mov_title,
    MAX(mr.rev_stars) AS max_stars
FROM movie m,
     movie_rating mr
WHERE m.mov_id = mr.mov_id
  AND mr.rev_stars = (
        SELECT MAX(rev_stars)
        FROM movie_rating
        WHERE rev_stars IS NOT NULL
    )
GROUP BY m.mov_title
ORDER BY m.mov_title ASC;
```

## Output

| mov_title          | max_stars |
|-------------------|-----------|
| The Usual Suspects | 8.6       |

## 22. Write a SQL query to find all reviewers who rated the movie 'American Beauty'. Return reviewer name.
```sql
SELECT 
    rev_name
FROM
    movie_reviewer
WHERE
    rev_id IN (SELECT 
            mov_id
        FROM
            movie
        WHERE
            mov_title = 'American Beauty');
```

## Output

| rev_name   |
|------------|
| Josh Cates |

## 23. Write a SQL query to find the movies that have not been reviewed by any reviewer body other than 'Paul Monks'. Return movie title.
```sql
SELECT 
    mov_title
FROM
    movie
WHERE
    mov_id IN (SELECT 
            mov_id
        FROM
            movie_rating
        WHERE
            rev_id IN (SELECT 
                    rev_id
                FROM
                    movie_reviewer
                WHERE
                    rev_name != 'Paul Monks'));
```

## Output

| mov_title           |
|-------------------|
| Vertigo             |
| The Innocents       |
| Lawrence of Arabia  |
| Blade Runner        |
| The Usual Suspects  |
| Chinatown           |
| Annie Hall          |
| Princess Mononoke   |
| American Beauty     |
| Titanic             |
| Good Will Hunting   |
| Trainspotting       |
| Donnie Darko        |
| Slumdog Millionaire |
| Aliens              |
| Beyond the Sea      |
| Avatar              |
| Seven Samurai       |

## 24. Write a SQL query to find the movies with the lowest ratings. Return reviewer name, movie title, and number of stars for those movies.
```sql
SELECT 
    rev_name, mov_title, rev_stars
FROM
    movie_rating
        JOIN
    movie ON movie.mov_id = movie_rating.mov_id
        JOIN
    movie_reviewer ON movie_rating.rev_id = movie_reviewer.rev_id;
```

## Output

| rev_name           | mov_title           | rev_stars |
|-------------------|---------------------|-----------|
| Righty Sock        | Vertigo             | 8.4       |
| Jack Malvern       | The Innocents       | 7.9       |
| Flagrant Baronessa | Lawrence of Arabia  | 8.3       |
|                    | Blade Runner        | 8.2       |
| Simon Wright       | The Usual Suspects  | 8.6       |
| Neal Wruck         | Chinatown           |           |
| Paul Monks         | Boogie Nights       | 3.0       |
| Mike Salvati       | Annie Hall          | 8.1       |
|                    | Princess Mononoke   | 8.4       |
| Sasha Goldshtein   | American Beauty     | 7.0       |
| Righty Sock        | Titanic             | 7.7       |
| Josh Cates         | Good Will Hunting   | 4.0       |
| Scott LeBrun       | Trainspotting       |           |
| Hannah Steele      | Donnie Darko        | 8.1       |
| Vincent Cadena     | Slumdog Millionaire | 8.0       |
| Brandt Sponseller  | Aliens              | 8.4       |
| Richard Adams      | Beyond the Sea      | 6.7       |
| Victor Woeltjen    | Avatar              | 7.3       |
| Krug Stillo        | Seven Samurai       | 7.7       |

## 25. Write a SQL query to find the movies directed by 'James Cameron'. Return movie title.
```sql
SELECT 
    mov_title
FROM
    movie
WHERE
    mov_id IN (SELECT 
            mov_id
        FROM
            movie_direction
        WHERE
            dir_id IN (SELECT 
                    dir_id
                FROM
                    director
                WHERE
                    dir_fname = 'James'
                        AND dir_lname = 'Cameron'));
```

## Output

| mov_title |
|-----------|
| Titanic   |
| Aliens    |

## 26. Write a query in SQL to find the movies in which one or more actors appeared in more than one film.
```sql
SELECT DISTINCT
    m.mov_title,
    m.mov_year
FROM movie m
JOIN movie_cast mc
    ON m.mov_id = mc.mov_id
WHERE mc.act_id IN (
    SELECT act_id
    FROM movie_cast
    GROUP BY act_id
    HAVING COUNT(mov_id) > 1
);
```

## Output

| mov_title       | mov_year |
|-----------------|----------|
| American Beauty | 1999     |
| Beyond the Sea  | 2004     |

## 27. Write a SQL query to find all reviewers whose ratings contain a NULL value. Return reviewer name.
```sql
SELECT 
    rev_name
FROM
    movie_reviewer
        INNER JOIN
    movie_rating ON movie_rating.rev_id = movie_reviewer.rev_id
WHERE
    num_o_ratings IS NULL; 
```

## Output

| rev_name        |
|-----------------|
|                 |
| Victor Woeltjen |

## 28. Write a SQL query to find out who was cast in the movie 'Annie Hall'. Return actor first name, last name and role.
```sql
SELECT 
    act_fname, act_lname, role
FROM
    movie_cast
        JOIN
    movie ON movie_cast.mov_id = movie.mov_id
        JOIN
    actor ON actor.act_id = movie_cast.act_id
WHERE
    mov_title = 'Annie Hall';
```

## Output

| act_fname | act_lname | role        |
|-----------|-----------|-------------|
| Woody     | Allen     | Alvy Singer |

## 29. Write a SQL query to find the director who directed a movie that featured a role in 'Eyes Wide Shut'. Return director first name, last name and movie title.
```sql
SELECT
    d.dir_fname,
    d.dir_lname,
    m.mov_title
FROM movie m
JOIN movie_direction md
    ON m.mov_id = md.mov_id
JOIN director d
    ON md.dir_id = d.dir_id
WHERE m.mov_title = 'Eyes Wide Shut';
```

## Output

| dir_fname | dir_lname | mov_title      |
|-----------|-----------|----------------|
| Stanley   | Kubrick   | Eyes Wide Shut |

## 30. Write a SQL query to find the director of a movie that cast a role as Sean Maguire. Return director first name, last name and movie title.
```sql
SELECT
    dir_fname,
    dir_lname,
    mov_title
FROM movie_cast 
JOIN movie 
    ON movie_cast.mov_id = movie.mov_id
JOIN movie_direction 
    ON movie.mov_id = movie_direction.mov_id
JOIN director d
    ON movie_direction.dir_id = d.dir_id
WHERE movie_cast.role = 'Sean Maguire';
```

## Output

| dir_fname | dir_lname | mov_title         |
|-----------|-----------|-------------------|
| Gus       | Van Sant  | Good Will Hunting |

## 31. Write a SQL query to find out which actors have not appeared in any movies between 1990 and 2000 (Begin and end values are included.). Return actor first name, last name, movie title and release year.
```sql
SELECT 
    act_fname, act_lname, mov_title, mov_year
FROM
    movie
        JOIN
    movie_cast ON movie.mov_id = movie_cast.mov_id
        JOIN
    actor ON actor.act_id = movie_cast.act_id
WHERE
    movie.mov_year NOT BETWEEN 1990 AND 2000;
```

## output

| act_fname | act_lname  | mov_title           | mov_year |
|-----------|------------|---------------------|----------|
| James     | Stewart    | Vertigo             | 1958     |
| Deborah   | Kerr       | The Innocents       | 1961     |
| Peter     | OToole     | Lawrence of Arabia  | 1962     |
| Robert    | De Niro    | The Deer Hunter     | 1978     |
| F. Murray | Abraham    | Amadeus             | 1984     |
| Harrison  | Ford       | Blade Runner        | 1982     |
| Jack      | Nicholson  | Chinatown           | 1974     |
| Christian | Bale       | Chinatown           | 1974     |
| Woody     | Allen      | Annie Hall          | 1977     |
| Jon       | Voight     | Deliverance         | 1972     |
| Maggie    | Gyllenhaal | Donnie Darko        | 2001     |
| Dev       | Patel      | Slumdog Millionaire | 2008     |
| Sigourney | Weaver     | Aliens              | 1986     |
| Kevin     | Spacey     | Beyond the Sea      | 2004     |

## 32. Write a SQL query to find the directors who have directed films in a variety of genres. Group the result set on director first name, last name and generic title. Sort the result-set in ascending order by director first name and last name. Return director first name, last name and number of genres movies.
```sql
SELECT
    director.dir_fname,
    director.dir_lname,
    COUNT(DISTINCT genres.gen_id) AS number_of_genres
FROM director
JOIN movie_direction
    ON director.dir_id = movie_direction.dir_id
JOIN movie
    ON movie.mov_id = movie_direction.mov_id
JOIN movie_genres
    ON movie.mov_id = movie_genres.mov_id
JOIN genres
    ON genres.gen_id = movie_genres.gen_id
GROUP BY
    director.dir_fname,
    director.dir_lname
HAVING COUNT(DISTINCT genres.gen_id) > 1
ORDER BY
    director.dir_fname ASC,
    director.dir_lname ASC;
```

## Output

Empty set

## 33. Write a SQL query to find the movies with year and genres. Return movie title, movie year and generic title.
```sql
SELECT 
    mov_year, gen_title
FROM
    movie
        JOIN
    movie_genres ON movie.mov_id = movie_genres.mov_id
        JOIN
    genres ON genres.gen_id = movie_genres.gen_id;
```

## Output

| mov_year | gen_title |
|----------|-----------|
| 1986     | Action    |
| 1962     | Adventure |
| 1972     | Adventure |
| 1997     | Animation |
| 1977     | Comedy    |
| 1995     | Crime     |
| 1994     | Crime     |
| 1996     | Drama     |
| 2008     | Drama     |
| 2001     | Drama     |
| 1995     | Drama     |
| 1961     | Horror    |
| 2004     | Music     |
| 1958     | Mystery   |
| 1999     | Mystery   |
| 1985     | Mystery   |
| 1999     | Romance   |
| 1982     | Thriller  |
| 1978     | War       |

## 34. Write a SQL query to find all the movies with year, genres, and name of the director.
```sql
SELECT 
    mov_year, gen_title, dir_fname
FROM
    movie
        JOIN
    movie_genres ON movie.mov_id = movie_genres.mov_id
        JOIN
    genres ON movie_genres.gen_id = genres.gen_id
        JOIN
    movie_direction ON movie.mov_id = movie_direction.mov_id
        JOIN
    director ON movie_direction.dir_id = director.dir_id;
```

## Output

| mov_year | gen_title | dir_fname |
|----------|-----------|-----------|
| 1986     | Action    | James     |
| 1962     | Adventure | David     |
| 1972     | Adventure | John      |
| 1997     | Animation | Hayao     |
| 1977     | Comedy    | Woody     |
| 1995     | Crime     | Bryan     |
| 1994     | Crime     | Frank     |
| 1996     | Drama     | Danny     |
| 2008     | Drama     | Danny     |
| 1961     | Horror    | Jack      |
| 2004     | Music     | Kevin     |
| 1958     | Mystery   | Alfred    |
| 1999     | Mystery   | Stanley   |
| 1999     | Romance   | Sam       |
| 1982     | Thriller  | Ridley    |
| 1978     | War       | Michael   |

## 35. Write a SQL query to find the movies released before 1st January 1989. Sort the result-set in descending order by date of release. Return movie title, release year, date of release, duration, and first and last name of the director.
```sql
SELECT 
    mov_title,
    mov_year,
    mov_dt_rel,
    mov_time,
    dir_fname,
    dir_lname
FROM
    movie
        JOIN
    movie_direction ON movie.mov_id = movie_direction.mov_id
        JOIN
    director ON director.dir_id = movie_direction.dir_id
WHERE
    mov_dt_rel < '1989-01-01'
ORDER BY mov_dt_rel DESC; 
```

## Output

| mov_title          | mov_year | mov_dt_rel | mov_time | dir_fname | dir_lname |
|-------------------|----------|------------|----------|-----------|-----------|
| Aliens             | 1986     | 1986-08-29 | 137      | James     | Cameron   |
| Amadeus            | 1984     | 1985-01-07 | 160      | Milos     | Forman    |
| Deliverance        | 1972     | 1982-10-05 | 109      | John      | Boorman   |
| Blade Runner       | 1982     | 1982-09-09 | 117      | Ridley    | Scott     |
| The Deer Hunter    | 1978     | 1979-03-08 | 183      | Michael   | Cimino    |
| Annie Hall         | 1977     | 1977-04-20 | 93       | Woody     | Allen     |
| Chinatown          | 1974     | 1974-08-09 | 130      | Roman     | Polanski  |
| Lawrence of Arabia | 1962     | 1962-12-11 | 216      | David     | Lean      |
| The Innocents      | 1961     | 1962-02-19 | 100      | Jack      | Clayton   |
| Vertigo            | 1958     | 1958-08-24 | 128      | Alfred    | Hitchcock |

## 36. Write a SQL query to calculate the average movie length and count the number of movies in each genre. Return genre title, average time and number of movies for each genre.
```sql
SELECT
    genres.gen_title,
    AVG(movie.mov_time) AS avg_movie_time,
    COUNT(movie.mov_id) AS number_of_movies
FROM genres 
JOIN movie_genres 
    ON genres.gen_id = movie_genres.gen_id
JOIN movie
    ON movie_genres.mov_id = movie.mov_id
GROUP BY genres.gen_title;
```

## Output

| gen_title | avg_movie_time | number_of_movies |
|-----------|---|---|
| Action    | 137.0000       | 1                |
| Adventure | 162.5000       | 2                |
| Animation | 134.0000       | 1                |
| Comedy    | 93.0000        | 1                |
| Crime     | 124.0000       | 2                |
| Drama     | 129.2500       | 4                |
| Horror    | 100.0000       | 1                |
| Music     | 118.0000       | 1                |
| Mystery   | 134.3333       | 3                |
| Romance   | 122.0000       | 1                |
| Thriller  | 117.0000       | 1                |
| War       | 183.0000       | 1                |

## 37. Write a SQL query to find movies with the shortest duration. Return movie title, movie year, director first name, last name, actor first name, last name and role.
```sql
SELECT 
    mov_title,
    mov_year,
    dir_fname,
    dir_lname,
    act_fname,
    act_lname,
    role
FROM
    movie
        JOIN
    movie_direction ON movie_direction.mov_id = movie.mov_id
        JOIN
    director ON director.dir_id = movie_direction.dir_id
        JOIN
    movie_cast ON movie_cast.mov_id = movie.mov_id
        JOIN
    actor ON actor.act_id = movie_cast.act_id
WHERE
    movie.mov_time = (SELECT 
            MIN(mov_time)
        FROM
            movie);
```

## Output

| mov_title  | mov_year | dir_fname | dir_lname | act_fname | act_lname | role        |
|-----------|----------|-----------|-----------|-----------|-----------|-------------|
| Annie Hall | 1977     | Woody     | Allen     | Woody     | Allen     | Alvy Singer |

## 38. Write a SQL query to find the years in which a movie received a rating of 3 or 4. Sort the result in increasing order on movie year.
```sql
SELECT 
    mov_year
FROM
    movie
        JOIN
    movie_rating ON movie.mov_id = movie_rating.mov_id
WHERE
    movie_rating.rev_stars = 3
        OR movie_rating.rev_stars = 4
ORDER BY mov_year; 
```

## Output

| mov_year |
|----------|
| 1997     |
| 1997     |

## 39. Write a SQL query to get the reviewer name, movie title, and stars in an order that reviewer name will come first, then by movie title, and lastly by number of stars.
```sql
SELECT 
    rev_name, mov_title, rev_stars
FROM
    movie_rating
        JOIN
    movie ON movie_rating.mov_id = movie.mov_id
        JOIN
    movie_reviewer ON movie_rating.rev_id = movie_reviewer.rev_id; 
```

## Output

| rev_name           | mov_title           | rev_stars |
|-------------------|---------------------|-----------|
| Righty Sock        | Vertigo             | 8.4       |
| Jack Malvern       | The Innocents       | 7.9       |
| Flagrant Baronessa | Lawrence of Arabia  | 8.3       |
|                    | Blade Runner        | 8.2       |
| Simon Wright       | The Usual Suspects  | 8.6       |
| Neal Wruck         | Chinatown           |           |
| Paul Monks         | Boogie Nights       | 3.0       |
| Mike Salvati       | Annie Hall          | 8.1       |
|                    | Princess Mononoke   | 8.4       |
| Sasha Goldshtein   | American Beauty     | 7.0       |
| Righty Sock        | Titanic             | 7.7       |
| Josh Cates         | Good Will Hunting   | 4.0       |
| Scott LeBrun       | Trainspotting       |           |
| Hannah Steele      | Donnie Darko        | 8.1       |
| Vincent Cadena     | Slumdog Millionaire | 8.0       |
| Brandt Sponseller  | Aliens              | 8.4       |
| Richard Adams      | Beyond the Sea      | 6.7       |
| Victor Woeltjen    | Avatar              | 7.3       |
| Krug Stillo        | Seven Samurai       | 7.7       |

## 40. Write a SQL query to find those movies that have at least one rating and received the most stars. Sort the result-set on movie title. Return movie title and maximum review stars.
```sql
SELECT
    movie.mov_title,
    MAX(movie_rating.rev_stars) AS max_review_stars
FROM movie
JOIN movie_rating
    ON movie.mov_id = movie_rating.mov_id
WHERE movie_rating.rev_stars IS NOT NULL
GROUP BY movie.mov_title
HAVING MAX(movie_rating.rev_stars) = (
    SELECT MAX(rev_stars)
    FROM movie_rating
    WHERE rev_stars IS NOT NULL
)
ORDER BY movie.mov_title;
```

## Output

| mov_title          | max_review_stars |
|-------------------|------------------|
| The Usual Suspects | 8.6              |

## 41. Write a SQL query to find out which movies have received ratings. Return movie title, director first name, director last name and review stars.
```sql
SELECT 
    mov_title, dir_fname, dir_lname, rev_stars
FROM
    movie_rating
        JOIN
    movie ON movie_rating.mov_id = movie.mov_id
        JOIN
    movie_direction ON movie_direction.mov_id = movie_rating.mov_id
        JOIN
    director ON movie_direction.dir_id = director.dir_id
WHERE
    rev_stars IS NOT NULL;
```

## Output

| mov_title           | dir_fname | dir_lname       | rev_stars |
|-------------------|-----------|-----------------|-----------|
| Vertigo             | Alfred    | Hitchcock       | 8.4       |
| The Innocents       | Jack      | Clayton         | 7.9       |
| Lawrence of Arabia  | David     | Lean            | 8.3       |
| Blade Runner        | Ridley    | Scott           | 8.2       |
| The Usual Suspects  | Bryan     | Singer          | 8.6       |
| Boogie Nights       | Paul      | Thomas Anderson | 3.0       |
| Annie Hall          | Woody     | Allen           | 8.1       |
| Princess Mononoke   | Hayao     | Miyazaki        | 8.4       |
| American Beauty     | Sam       | Mendes          | 7.0       |
| Titanic             | James     | Cameron         | 7.7       |
| Good Will Hunting   | Gus       | Van Sant        | 4.0       |
| Donnie Darko        | Richard   | Kelly           | 8.1       |
| Slumdog Millionaire | Danny     | Boyle           | 8.0       |
| Aliens              | James     | Cameron         | 8.4       |
| Beyond the Sea      | Kevin     | Spacey          | 6.7       |

## 42. Write a SQL query to find movies in which one or more actors have acted in more than one film. Return movie title, actor first and last name, and the role.
```sql
SELECT 
    movie.mov_title,
    actor.act_fname,
    actor.act_lname,
    movie_cast.role
FROM
    movie
        JOIN
    movie_cast ON movie.mov_id = movie_cast.mov_id
        JOIN
    actor ON actor.act_id = movie_cast.act_id
WHERE
    movie_cast.act_id IN (SELECT 
            movie_cast.act_id
        FROM
            movie_cast
        GROUP BY movie_cast.act_id
        HAVING COUNT(movie_cast.mov_id) > 1)
ORDER BY movie.mov_title , actor.act_fname;
```

## Output

| mov_title       | act_fname | act_lname | role           |
|-----------------|-----------|-----------|----------------|
| American Beauty | Kevin     | Spacey    | Lester Burnham |
| Beyond the Sea  | Kevin     | Spacey    | Bobby Darin    |

## 43. Write a SQL query to find the actor whose first name is 'Claire' and last name is 'Danes'. Return director first name, last name, movie title, actor first name and last name, role.
```sql
SELECT 
    dir_fname, dir_lname, mov_title, act_fname, act_lname, role
FROM
    actor
        JOIN
    movie_cast ON actor.act_id = movie_cast.act_id
        JOIN
    movie ON movie.mov_id = movie_cast.mov_id
        JOIN
    movie_direction ON movie_direction.mov_id = movie.mov_id
        JOIN
    director ON director.dir_id = movie_direction.dir_id
WHERE
    actor.act_fname = 'Claire'
        AND actor.act_lname = 'Danes';
```

## Output

| dir_fname | dir_lname | mov_title         | act_fname | act_lname | role |
|-----------|-----------|-------------------|-----------|-----------|------|
| Hayao     | Miyazaki  | Princess Mononoke | Claire    | Danes     | San  |

## 44. Write a SQL query to find for actors whose films have been directed by them. Return actor first name, last name, movie title and role.
```sql
SELECT 
    act_fname, act_lname, mov_title, role
FROM
    actor
        JOIN
    movie_cast ON actor.act_id = movie_cast.act_id
        JOIN
    movie ON movie.mov_id = movie_cast.mov_id
        JOIN
    movie_direction ON movie_direction.mov_id = movie.mov_id
        JOIN
    director ON movie_direction.dir_id = director.dir_id
WHERE
    dir_fname = act_fname
        AND dir_lname = act_lname;
```

## Output

| act_fname | act_lname | mov_title      | role        |
|-----------|-----------|----------------|-------------|
| Woody     | Allen     | Annie Hall     | Alvy Singer |
| Kevin     | Spacey    | Beyond the Sea | Bobby Darin |

## 45. Write a SQL query to find the cast list of the movie 'Chinatown'. Return first name, last name.
```sql
SELECT
    actor.act_fname,
    actor.act_lname
FROM actor
JOIN movie_cast
    ON actor.act_id = movie_cast.act_id
JOIN movie
    ON movie.mov_id = movie_cast.mov_id
WHERE movie.mov_title = 'Chinatown';
```

## Output

| act_fname | act_lname |
|-----------|-----------|
| Jack      | Nicholson |
| Christian | Bale      |

## 46. Write a SQL query to find those movies where actor's first name is 'Harrison' and last name is 'Ford'. Return movie title.
```sql
SELECT mov_title from movie JOIN movie_cast ON movie.mov_id = movie_cast.mov_id JOIN actor ON actor.act_id = movie_cast.act_id WHERE actor.act_fname = "Harrison" AND actor.act_lname = "Ford";
```

## Output

| mov_title    |
|-------------|
| Blade Runner |

## 47. Write a SQL query to find the highest-rated movies. Return movie title, movie year, review stars and releasing country.
```sql
SELECT mov_title, mov_year, rev_stars, mov_rel_country from movie JOIN movie_rating ON movie.mov_id = movie_rating.mov_id WHERE rev_stars = (SELECT MAX(rev_stars) from movie_rating);
```

## Output

| mov_title          | mov_year | rev_stars | mov_rel_country |
|------------------|----------|-----------|-----------------|
| The Usual Suspects | 1995     | 8.6       | UK              |

## 48. Write a SQL query to find the highest-rated 'Mystery Movies'. Return the title, year, and rating.
```sql
SELECT
    movie.mov_title,
    movie.mov_year,
    movie_rating.rev_stars
FROM movie
JOIN movie_genres
    ON movie.mov_id = movie_genres.mov_id
JOIN genres
    ON genres.gen_id = movie_genres.gen_id
JOIN movie_rating
    ON movie.mov_id = movie_rating.mov_id
WHERE genres.gen_title = 'Mystery'
  AND movie_rating.rev_stars = (
        SELECT MAX(movie_rating.rev_stars)
        FROM movie_rating
        JOIN movie_genres
            ON movie_rating.mov_id = movie_genres.mov_id
        JOIN genres
            ON genres.gen_id = movie_genres.gen_id
        WHERE genres.gen_title = 'Mystery'
    );
```

## Output

| mov_title | mov_year | rev_stars |
|----------|----------|-----------|
| Vertigo   | 1958     | 8.4       |

## 49. Write a SQL query to find the years when most of the 'Mystery Movies' produced. Count the number of generic title and compute their average rating. Group the result set on movie release year, generic title. Return movie year, generic title, number of generic title and average rating.
```sql
SELECT
    movie.mov_year,
    genres.gen_title,
    COUNT(movie.mov_id) AS number_of_movies,
    AVG(movie_rating.rev_stars) AS average_rating
FROM movie
JOIN movie_genres
    ON movie.mov_id = movie_genres.mov_id
JOIN genres
    ON genres.gen_id = movie_genres.gen_id
JOIN movie_rating
    ON movie.mov_id = movie_rating.mov_id
WHERE genres.gen_title = 'Mystery'
GROUP BY movie.mov_year, genres.gen_title
ORDER BY movie.mov_year;
```

## Output

| mov_year | gen_title | number_of_movies | average_rating |
|----------|-----------|------------------|-----------------|
| 1958     | Mystery   | 1                | 8.40000        |

## 50. Write a query in SQL to generate a report, which contain the fields movie title, name of the female actor, year of the movie, role, movie genres, the director, date of release, and rating of that movie.
```sql
SELECT
    movie.mov_title,
    actor.act_fname,
    actor.act_lname,
    movie.mov_year,
    movie_cast.role,
    genres.gen_title,
    director.dir_fname,
    director.dir_lname,
    movie.mov_dt_rel,
    movie_rating.rev_stars
FROM movie
JOIN movie_cast
    ON movie.mov_id = movie_cast.mov_id
JOIN actor
    ON actor.act_id = movie_cast.act_id
JOIN movie_genres
    ON movie.mov_id = movie_genres.mov_id
JOIN genres
    ON genres.gen_id = movie_genres.gen_id
JOIN movie_direction
    ON movie.mov_id = movie_direction.mov_id
JOIN director
    ON director.dir_id = movie_direction.dir_id
JOIN movie_rating
    ON movie.mov_id = movie_rating.mov_id
WHERE actor.act_gender = 'F';
```

## Output

| mov_title         | act_fname | act_lname | mov_year | role   | gen_title | dir_fname | dir_lname | mov_dt_rel | rev_stars |
|------------------|-----------|-----------|----------|--------|-----------|-----------|-----------|------------|-----------|
| Aliens            | Sigourney | Weaver    | 1986     | Ripley | Action    | James     | Cameron   | 1986-08-29 | 8.4       |
| Princess Mononoke | Claire    | Danes     | 1997     | San    | Animation | Hayao     | Miyazaki  | 2001-10-19 | 8.4       |
| The Innocents     | Deborah   | Kerr      | 1961     | Miss Giddens | Horror | Jack | Clayton | 1962-02-19 | 7.9 |
