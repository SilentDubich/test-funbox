import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "../store";
import {api} from "../api";
import Cat from "../../img/cat.png"


// Данные экшены, санки и редюсер в данном тестовом нигде не используются, они предназначены для демонстрации стиля
// написания и в частности владения тайпскриптом
type ActionCardType = InferActionsTypes<typeof actionsCard>
type ThunkCardType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCardType>

export const actionsCard = {
    uploadCards: (data: Array<CardType>) => ({type: 'cardReducer/uploadCards', data} as const)
}


export const uploadCardsThunk = (): ThunkCardType => {
    return async (dispatch) => {
        const data = await api.uploadCards()
        dispatch(actionsCard.uploadCards(data))
    }
}


export type CardType = {
    id: number
    data: {
        name: string
        taste: string
        portions: number
        gifts: Array<string>
        weight: string
        unit: string
        photo: string
        descriptions: {
            available: {
                header: string
                footer: string
            }
            selected: {
                header: string
                hover: string
                footer: string
            }
            outOff: {
                header: string
                footer: string
            }
        }
    }
    isAvailable: boolean
}

let initialState = {
    cards: [
        {
            id: 0,
            data: {
                name: 'Нямушка',
                taste: 'С фуа-гра',
                portions: 10,
                gifts: ['Мышь в подарок'],
                weight: '0,5',
                unit: 'кг',
                photo: Cat,
                descriptions: {
                    available: {
                        header: 'Сказочное заморствое лакомство',
                        footer: 'Чего сидишь? Порадуй коте, купи'
                    },
                    selected: {
                        header: 'Сказочное заморствое лакомство',
                        hover: 'Котэ не одобряет?',
                        footer: 'Печень утки разварная с артишоками.'
                    },
                    outOff: {
                        header: 'Сказочное заморствое лакомство',
                        footer: 'Печалька, с фуа-гра закончился.'
                    }
                },
            },
            isAvailable: true
        },
        {
            id: 1,
            data: {
                name: 'Нямушка',
                taste: 'С рыбой',
                portions: 40,
                gifts: ['2 мыши в подарок'],
                weight: '2',
                unit: 'кг',
                photo: Cat,
                descriptions: {
                    available: {
                        header: 'Сказочное заморствое лакомство',
                        footer: 'Чего сидишь? Порадуй коте, купи.'
                    },
                    selected: {
                        header: 'Сказочное заморствое лакомство',
                        hover: 'Котэ не одобряет?',
                        footer: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
                    },
                    outOff: {
                        header: 'Сказочное заморствое лакомство',
                        footer: 'Печалька, с рыбой закончился.'
                    }
                },
            },
            isAvailable: true
        },
        {
            id: 2,
            data: {
                name: 'Нямушка',
                taste: 'С курой',
                portions: 100,
                gifts: ['5 мышей в подарок', 'Заказчик доволен', 'Заказчик сыт', 'Заказчик не ссыт в тапки'],
                weight: '5',
                unit: 'кг',
                photo: Cat,
                descriptions: {
                    available: {
                        header: 'Сказочное заморствое лакомство',
                        footer: 'Чего сидишь? Порадуй коте, купи.'
                    },
                    selected: {
                        header: 'Сказочное заморствое лакомство',
                        hover: 'Котэ не одобряет?',
                        footer: 'Филе цыплят с трюфилями в бульоне.'
                    },
                    outOff: {
                        header: 'Сказочное заморствое лакомство',
                        footer: 'Печалька, с курой закончился.'
                    }
                },
            },
            isAvailable: false
        },
    ] as Array<CardType>
}

type InitialStateType = typeof initialState

export const cartInstructions = (state = initialState, action: ActionCardType): InitialStateType => {
    switch (action.type) {
        case "cardReducer/uploadCards":
            return {...state, cards: action.data}
        default:
            return state
    }
}
