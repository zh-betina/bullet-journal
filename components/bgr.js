import bgr from "./bgr.module.css";

export default function Bgr({ children }) {
    return (
        <>
            <svg className={bgr.background} id='patternId'
                width='100%'
                height='100%'
                xmlns='http://www.w3.org/2000/svg'>
                <defs><pattern id='a'
                    patternUnits='userSpaceOnUse'
                    width='44.5' height='43'
                    patternTransform='scale(1) rotate(180)'>
                    <rect x='0' y='0' width='100%'
                        height='100%' fill='hsla(0,0%,100%,1)' />
                    <path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'
                        transform='translate(2.25,0)' strokeWidth='1' stroke='none' fill='hsla(199, 100%, 88%, 1)' />
                </pattern></defs><rect width='800%' height='800%' transform='translate(-79,-52)' fill='url(%23a)' />
            </svg>
            {children}
        </>
    )
}