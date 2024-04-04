/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export default function Heading(props) {
  
const {
    children,
    variant,
    theme,                                          // notion de style
    display                                         // colors

} = props;

const classDefault = "mt-5 uppercase"
let font, color

    switch (theme) {
        case "secondary": font ="font-secondary"

            break;

        default: "tracking-tighter"
            break;
                    }

    switch (display) {
        case "gray": font = "text-gray-600"
            
            break;
    
        default: color = "text-secondary"
            break;
    }
  
    switch (variant) {
        case "h3":
            return (
                <div className="flex items-center justify-center my-5">
                    <h3 className={`text-2xl ${classDefault} ${font} ${color}`}>
                        {children}
                    </h3>
                </div>
            )
            default:
            return (
                <div className="flex items-center justify-center my-5">
                    <h2 className={`${theme === "secondary" ? "text-5xl" : "text-3xl" } ${classDefault} ${font} ${color}`}>
                        {children}
                    </h2>
                </div>
            )
  
                    }

                    
}
