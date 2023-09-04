export interface match{
    id:number;
    country_id:number;
    league_id:number;
    season:any;
    date:Date;
    stage:number;
    match_api_id:number;
    home_team_api_id:number;
    home_team_goal:number;
    away_team_goal:number;
}
export interface teams{
    id:number;
    team_api_id:number;
    team_fifa_api_id:number;
    team_long_name:string;
    team_short_name:string;
}
export interface Country{
    id:number;
    name:string;
}

export interface League{
    id:number;
    name:string;
}

export interface ParticipantTeam{
    league:string;
    team:string;
}

export interface matchData{
    date: any;
    season: any;
    league: string;
    country:string;
    stage:number;
    home_team: string;
    away_team: string;
    home_team_goal: number;
    away_team_goal: number;
    result: string;
}

export interface ClubName{
    id:number;
    team_api_id:number;
    team_fifa_api_id:number;
    team_long_name:string;
    team_short_name:string;
}

export interface player{
    club_name:string;
    player_name:string;
}

export interface season{
    Season: any;
}

export interface team_status{
    home_team: number;
    team_long_name: string;
    matches: number;
    won: number;
    lost: number;
    draw: number;
    win_percentage: number;
} 