import { Ingredient } from '@prisma/client'
import { ApiRoutes } from './constants'
import { instance } from "./instance"

export const getAll = async (): Promise<Ingredient[]> => {
	return (await instance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data
}