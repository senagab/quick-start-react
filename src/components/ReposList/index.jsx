import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        setErro(false); // Resetando erro a cada busca de usuário

        fetch(`https://api.github.com/users/${nomeUsuario}/repos?sort=updated`)
            .then((res) => {
                if (!res.ok) {
                    // Se a resposta não for ok (status 404 ou outro), lançamos um erro
                    throw new Error(`Usuário ${nomeUsuario} não encontrado`);
                }
                return res.json();
            })
            .then((resJson) => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000); // Simulando um atraso para o carregamento
            })
            .catch((e) => {
                setEstaCarregando(false);
                setErro(true);
                console.error(e.message); // Exibe o erro no console
            });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <span className="loading">Carregando projetos...</span>
            ) : erro ? (
                <span className="loading">O usuário <b>{nomeUsuario}</b> não foi encontrado.</span>
            ) : (
                <ul className={styles.list}>
                    {repos.length === 0 ? (
                        <h2>Nenhum repositório encontrado para o usuário {nomeUsuario}.</h2>
                    ) : (
                        repos.map(({ id, name, language, html_url }) => (
                            <li className={styles.listItem} key={id}>
                                <div className={styles.itemName}>
                                    <b>"{name}"</b>
                                </div>
                                <div className={styles.itemLanguage}>
                                    {language || "Linguagem não especificada"}
                                </div>
                                <a className={styles.itemLink} target="_blank" rel="noreferrer" href={html_url}>
                                    Visitar no Github
                                </a>
                            </li>
                        ))
                    )}
                </ul>
            )}
        </div>
    );
};

export default ReposList;