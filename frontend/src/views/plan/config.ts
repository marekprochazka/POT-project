export interface IPlanCreate {
    name:string
}

export const URLS = {
    PLANCREATE: 'tracker_api:plan_create',
    PLANDETAIL: 'tracker_api:plan_detail'
}

export interface IActiveExercise {
    id: number,
    name:string,
    last_overload_value: number,
    overload_history: string,
    volume: string
}

export interface ITraining {
    id: number,
    name: string,
    exercises: Array<IActiveExercise>
}

export interface IPlan {
    created_at: string,
    name:string,
    trainings: Array<ITraining>
}

export const emptyPlan = () => {
    return {
        created_at:'',
        name:'',
        trainings: Array<ITraining>()
    }
}