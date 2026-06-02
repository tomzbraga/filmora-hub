import React, { useState } from 'react'
import styles from './Login.module.css'
import logo from '../assets/fimora-logo.png'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit', { email, password })
    }

    return (
        <main className={styles.container}>
            <section className={styles.card} aria-labelledby="login-title">
                <img src={logo} alt="FilmoraHub" className={styles.logo} />

                <h1 id="login-title" className={styles.title}>
                    Seu catálogo de filmes e séries.
                </h1>
                <p className={styles.subtitle}>Explore o melhor do cinema.</p>

                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                    <div className={styles.field}>
                        <label htmlFor="email" className={styles.label}>
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={styles.input}
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-required="true"
                        />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="password" className={styles.label}>
                            Senha
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className={styles.input}
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            aria-required="true"
                        />
                    </div>

                    <button type="submit" className={styles.button}>
                        Entrar
                    </button>
                </form>
            </section>
        </main>
    )
}