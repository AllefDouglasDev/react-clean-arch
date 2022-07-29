import { Authentication } from '@/domain/usecases/Authentication'
import { Asserts, object, SchemaOf, string } from 'yup'

export const authenticationSchema: SchemaOf<Authentication.Input> = object({
  email: string().required().email(),
  password: string().required(),
})

export type FormProps = Asserts<typeof authenticationSchema>

