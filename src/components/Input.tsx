import { SignUpForm } from "@/types/SignUpForm"
import { useController, UseControllerProps } from "react-hook-form"


export const Input = (props: UseControllerProps<SignUpForm>) => {
    const { field,  } = useController(props)

    return(
        <div>
            <input  />

        </div>
    )
}