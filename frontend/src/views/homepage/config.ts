export const URLS = {
    PLAN_LIST:'core_api:plan_list'
}

export interface ITraining {
    name:string
}

export interface IPlan {
    id:number,
    name:string,
    trainings: Array<ITraining>
}

