

export default myLogger = ({type='', message='', log=''}) => {
    if (type)
    console.log(`[${type.toUpperCase}] `, message? `${message}: `: '', log)
}