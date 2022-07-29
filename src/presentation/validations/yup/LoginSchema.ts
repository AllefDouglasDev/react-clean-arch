import { Asserts, number, object, SchemaOf, string } from 'yup'


const schema: SchemaOf<> = object({
  email: string()
    .min(MIN_ABRUF_NUMBER_LENGTH, 'Needs to be at least 6 digits.')
    .max(
      MAX_ABRUF_NUMBER_LENGTH,
      'The field must not exceed a maximum length of 32 characters.',
    )
    .required(),
  projectId: number().required('An already created project must be selected.'),
  projectNumber: string()
    .min(MIN_PROJECT_NUMBER_LENGTH, 'A project number must be assigned.')
    .required(),
})

export type FormProps = Asserts<typeof schema>

export default schema

