export const URLS = {
    PLAN_LIST:'tracker_api:plan_list'
}

export interface ITraining {
    name:string
}

export interface IPlan {
    id:number,
    name:string,
    trainings: Array<ITraining>
}

