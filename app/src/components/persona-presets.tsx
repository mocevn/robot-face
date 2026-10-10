import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { useState } from "react"

export default function PersonaPresets() {
    const [persona, setPersona] = useState("default")
    return(
        <div className="flex justify-center">
            <div className="bg-gray-500 p-6 rounded-md w-1/2">
                <h1 className="text-2xl font-bold mb-4">Persona Presets</h1>
                <p className="text-xl mb-4">These are the default personas</p>
                <RadioGroup
                    value={persona}
                    onValueChange={setPersona}
                    className="flex flex-col gap-3"
                    >
                    <label className="flex cursor-pointer items-center gap-2">
                        <RadioGroupItem value="default" />
                        Default
                    </label>

                    <label className="flex cursor-pointer items-center gap-2">
                        <RadioGroupItem value="friendly" />
                        Friendly
                    </label>

                    <label className="flex cursor-pointer items-center gap-2">
                        <RadioGroupItem value="judgemental" />
                        Judgemental
                    </label>

                    <label className="flex cursor-pointer items-center gap-2">
                        <RadioGroupItem value="analytical" />
                        Analytical
                    </label>

                    <label className="flex cursor-pointer items-center gap-2">
                        <RadioGroupItem value="yes-man" />
                        Yes-man
                    </label>
                    </RadioGroup>
                        </div>
                    </div>
    )
}