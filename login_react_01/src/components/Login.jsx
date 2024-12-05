import { useState } from "react";

const Login = () => {

    const [loginSignup, setLoginSignup] = useState(true);

    const signupHandler = () => {
        setLoginSignup(false);
    }

    const loginHandler = () => {
        setLoginSignup(true);
    }

    return (
        <div className="flex items-center justify-center h-screen bg-slate-300">
            {loginSignup ?
                (
                    <div className="container grid grid-cols-2 place-items-center gap-12 w-[800px] h-[500px] border p-8 border-teal-400 bg-indigo-200 rounded-xl  ">
                        <div className="flex flex-col gap-5 p-2 w-full">
                            <h1 className="mb-7 text-3xl text-center">Giriş Yap</h1>
                            <input className="leading-7 outline-0 border border-teal-400 rounded-xl p-2" type="email" name="email" placeholder="E-posta adresinizi girin" />
                            <input className="leading-7 border border-teal-400 outline-0 rounded-xl p-2" type="password" name="password" placeholder="Şifrenizi girin" />
                            <button className="leading-7 rounded-xl text-center border bg-indigo-400 hover:bg-indigo-600 border-teal-400 mt-2">Giriş Yap</button>
                        </div>
                        <div className="flex flex-col gap-1 p-2 w-full">
                            <h1 className="mb-[40px] text-3xl text-center">Hoş Geldiniz</h1>
                            <p className="mb-[40px] leading-7 text-center">Daha aramıza katılmadınız mı? Hemen üyü olmak için aşağıdaki butona tıklayınız.</p>
                            <button onClick={signupHandler} className="leading-7 rounded-xl text-center border bg-indigo-400 hover:bg-indigo-600 border-teal-400 mt-2">Kayıt ol</button>
                        </div>
                    </div>
                )
                :
                (
                    <div className="container grid grid-cols-2 place-items-center gap-12 w-[800px] h-[500px] border p-8 border-teal-400 bg-indigo-200 rounded-xl  ">
                        <div className="flex flex-col gap-5 p-2 w-full">
                            <h1 className="mb-[40px] text-3xl text-center">Merhabalar</h1>
                            <p className="mb-[40px] leading-7 text-center">Önceden üye olduysanız aşağıdaki butona tıklayınız ve üyelik bilgileriniz ile giriş yapınız.</p>
                            <button onClick={loginHandler} className="leading-7 rounded-xl text-center border bg-indigo-400 hover:bg-indigo-600 border-teal-400 mt-2">Giriş Yap</button>
                        </div>
                        <div className="flex flex-col gap-5 p-2 w-full">
                            <h1 className="mb-7 text-3xl text-center">Kayıt ol</h1>
                            <input className="leading-7 outline-0 border border-teal-400 rounded-xl p-2" type="email" name="email" placeholder="E-posta adresinizi girin" />
                            <input className="leading-7 border border-teal-400 outline-0 rounded-xl p-2" type="password" name="password" placeholder="Şifrenizi belirleyin" />
                            <input className="leading-7 border border-teal-400 outline-0 rounded-xl p-2" type="password" name="password-again" placeholder="Şifrenizi tekrarlayın" />
                            <button className="leading-7 rounded-xl text-center border bg-indigo-400 hover:bg-indigo-600 border-teal-400 mt-2">Kayıt ol</button>
                        </div>
                    </div>
                )}

        </div>
    )
}

export default Login