const client = require('./connections')
const express = require('express');
const bodyParser = require('body-parser');
//var cors = require('cors');
//app.use(cors());

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.listen(3300, () => {
    console.log("Sever is now listening at port 3300");
})

client.connect();



app.get('/country', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.query('Select * from country')
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
})

app.get('/league', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.query('Select id,name from league')
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
})


app.get('/match', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.query('Select * from match')
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
})


app.get('/team', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.query('Select * from team')
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
})

app.get('/teamLeagueNameWithTheHelpOfCountryName/:name', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    const realName = req.params.name
    client.query(`select name from league where id = (select id from country where name = '${realName}')`)
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
})


app.get('/which_team_score_max_goal_in_home', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.query('select team_long_name from team where team_api_id = ((select home_team_api_id from match where home_team_goal = (select MAX(home_team_goal) from match) LIMIT 1) )')
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
})


app.get('/which_team_score_min_goal_in_home', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.query('select team_long_name from team where team_api_id = ((select home_team_api_id from match where home_team_goal = (select MIN(home_team_goal) from match) LIMIT 1) )')
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
})


app.get('/which_team_score_max_goal_in_away_from_home', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.query('select team_long_name from team where team_api_id = ((select away_team_api_id from match where away_team_goal = (select MAX(away_team_goal) from match) LIMIT 1) )')
        .then(testData => { 
            console.log(testData);
            res.send(testData.rows);
        })
})


app.get('/which_team_score_min_goal_in_away_from_home', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.query(`select team_long_name from team where team_api_id = ((select away_team_api_id from match where away_team_goal = (select MIN(away_team_goal) from match) LIMIT 1) )`)
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
})

app.get('/all_details', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.query(`select s1.season,s1.league,s1.home_team as team ,count(won) as number_of_wins from (select m.season,l.name as league,c.name as country,m.stage,t1.team_long_name as home_team,t2.team_long_name as Away_team,case when home_team_goal>away_team_goal then t1.team_long_name 
        when away_team_goal>home_team_goal then t2.team_long_name 
        else 'draw' end as won from match m join team t1 on m.home_team_api_id = t1.team_api_id 
        join team t2 on m.away_team_api_id = t2.team_api_id 
        join league l on m.league_id = l.id 
        join country c on m.country_id = c.id) as s1 group by home_team,league,season order by season,league,count(won) desc`)
        .then(testData => { 
            console.log(testData);
            res.send(testData.rows);
        })
})

app.get('/data_about_player', (req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.query(`select p.player_name, pa.player_api_id, pa.potential, pa.preferred_foot from player as p
    left join player_attributes as pa on p.player_api_id = pa.player_api_id`)
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
})


app.get('/data_about_team_participate_in_perticular_league', (req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.query(`select s1.league,s1.home_team as team from (select l.name as league,c.name as country,m.stage,t1.team_long_name as home_team,t2.team_long_name as Away_team,case when home_team_goal>away_team_goal then t1.team_long_name 
    when away_team_goal>home_team_goal then t2.team_long_name
    else 'draw' end as won from match m join team t1 on m.home_team_api_id = t1.team_api_id 
    join  team t2 on m.away_team_api_id = t2.team_api_id 
    join league l on m.league_id = l.id
    join country c on m.country_id = c.id) as s1 group by home_team,league order by league desc`)
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
})

app.get('/name_of_player_in_perticular_team', (req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.query(`Select club_name, name as player_name from fifa15_players
    order by club_name asc`)
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
})

app.get('/name_of_player_and_his_nationality', (req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.query(`Select name as player_name, nationality from fifa15_players
    order by name asc`)
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
})

app.get('/players_according_to_rating', (req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.query(`Select name as player_name, club_name, rating from fifa15_players
    order by rating desc`)
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
})

app.get('/team_matches', (req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.query(`select m.date,m.season,l.name as league,c.name as country,m.stage,t1.team_long_name as Home_Team,t2.team_long_name as Away_team,
        m.home_team_goal as home_team_goal,m.away_team_goal as away_team_goal,case when home_team_goal>away_team_goal then t1.team_long_name 
        when away_team_goal>home_team_goal then t2.team_long_name
        else 'draw' end as result from match m join team t1 on m.home_team_api_id = t1.team_api_id 
        join  team t2 on m.away_team_api_id = t2.team_api_id 
        join league l on m.league_id = l.id
        join country c on m.country_id = c.id`)
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
})

app.get('/team_stats', (req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    client.query('select home_team, home_wins.team_long_name,home_matches*2 as matches,w.won as won,\
    (home_matches*2)-w.won-(wins_at_away+wins_at_home) as lost,wins_at_away+wins_at_home as draw,w.win_percentage as win_percentage\
    from(select home_team,team_long_name,count(home_team) as wins_at_home,w.matches/2 as home_matches, count(home_team)*100/(w.matches/2) as home_win_percentage\
       from ( select m.home_team_api_id as home_team,t.team_long_name from match m \
           join  team t on m.home_team_api_id = t.team_api_id \
           where m.home_team_goal=m.away_team_goal) as win_table \
       join wins w on win_table.home_team = w.team_api_id \
       group by home_team,team_long_name,matches order by home_win_percentage desc) as home_wins,\
       (select away_team,team_long_name,count(away_team) as wins_at_away ,w.matches/2 as away_matches, count(away_team)*100/(w.matches/2) as away_win_percentage \
            from ( select m.away_team_api_id as away_team,t.team_long_name from match m \
            join  team t on m.away_team_api_id = t.team_api_id \
            where m.home_team_goal=m.away_team_goal) as win_table \
        join wins w on win_table.away_team = w.team_api_id \
          group by away_team,team_long_name,matches order by away_win_percentage desc) as away_wins,\
    wins w where home_team = away_team and w.team_api_id =home_wins.home_team  order by win_percentage desc')
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
})






   // select s1.season,s1.league,s1.home_team as team ,count(won) as number_of_wins from (select m.season,l.name as league,c.name as country,m.stage,t1.team_long_name as home_team,t2.team_long_name as Away_team,case when home_team_goal>away_team_goal then t1.team_long_name 
     //   when away_team_goal>home_team_goal then t2.team_long_name 
       // else 'draw' end as won from match m join team t1 on m.home_team_api_id = t1.team_api_id 
       // join team t2 on m.away_team_api_id = t2.team_api_id 
       // join league l on m.league_id = l.id 
       // join country c on m.country_id = c.id) as s1 group by home_team,league,season order by season,league,count(won) desc