import {
  useEffect,
  useMemo,
  useState,
} from 'react';

export const useForm = (initialForm = {}, formValidation = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidations, setFormValidations] = useState({})

    useEffect(() => {
        createValidations()
    }, [formState])
    //si cambia mi initialForm:
    useEffect(() => {
    setFormState(initialForm)
    }, [initialForm])
    //isFormValid con useMemo ya que evitar recalculo sin que cambien las formValidations
    const isFormValid = useMemo( () => {
        for (const campValid of Object.keys(formValidations)) {
        if (formValidations[campValid] !== null) return false
        }
        return true
    }, [formValidations])



    //funcion de cambio en campos del form
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    //reset del form
    const onResetForm = () => {
        setFormState(initialForm);
    }
    //funcion para crear validaciones
    const createValidations = () => {
        const checkFormValidations = {}
        for (const formCamp of Object.keys(formValidation)) {
            const [fn, mensaje] = formValidation[formCamp]
            checkFormValidations[`${formCamp}Valid`] = fn(formState[formCamp]) ? null : mensaje
        }
        setFormValidations(checkFormValidations)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidations,
        isFormValid
    }
}