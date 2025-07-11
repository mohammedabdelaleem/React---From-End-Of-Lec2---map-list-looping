import {useSelector} from 'react-redux'

export default function Home () {

  const lang = useSelector((state)=>state.language.lang)

  return (
    <div dir={`${lang=="ar" ? "rtl" : "ltr"}`}>
      <h1>Hello From Home</h1>
    </div>  
  );
}
