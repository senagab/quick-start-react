import { useState, useEffect } from "react";

import styles from './ReposList.module.css'

const ReposList = () => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/senagab/repos')
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000)
            // console.log(resJson);
        })
    }, []);

    return (
        <div className="container">
            {estaCarregando && (
                <h1>Carregando...</h1>
            )}
            <ul className={styles.list}>
                {/* {repos.map(repositorio => ( */}
                {repos.map(({id, name, language, html_url}) => (
                    <li className={styles.listItem}  key={id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> {name} <br />
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem:</b> 
                            {language} <br/>
                        </div>
                        <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a> 
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReposList;