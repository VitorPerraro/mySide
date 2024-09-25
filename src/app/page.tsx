import styles from './styles/page.module.css';
const Home: React.FC = () => {
  return (
    <>
      <div className={styles.text}>
        <h1>O melhor amigo do <span className={styles.highlight}>comprador</span> de imóveis!</h1>
        <p className={styles.styles_description_QxsL2}>
          Somos um Personal Shopper Imobiliário e nossa essência é única: nós temos um lado, o lado do comprador.
        </p>
      </div>
      <div className={styles.container}>
        <a href="https://myside.com.br/sobre-nos" target="_blank" className={styles.buttonLink} rel="noopener noreferrer">
          <button className={styles.button}>Entenda por que somos diferentes!</button>
        </a>
      </div>
      <div className={styles.smallDivContainer}>
        <div className={styles.textContainer}>
          <hr></hr>
          <h1>O que é o RIP e para que serve?</h1>
          <p>
            O Registro Imobiliário Patrimonial (RIP) é uma identificação dada aos imóveis pertencentes à Nação Brasileira.
            Isso significa que todos os imóveis com essa identificação foram protocolados como parte do patrimônio da União.
            Mas, se engana quem pensa que todos os imóveis da União ficam vazios ou são utilizados diariamente por instituições
            do Governo Federal. Pelo contrário, a maioria deles são utilizados por pessoas comuns, como você.
            O que acontece é que os imóveis administrados pela Secretaria do Patrimônio da União (SPU) são de propriedade da Nação,
            mas o domínio útil do patrimônio é do titular legal do bem. Ou seja, nada impede que estes imóveis sejam comprados
            e utilizados por terceiros, só que nesse caso, quando o dono atual do imóvel decide vendê-lo, é esse domínio útil que
            é transferido para o próximo titular.
          </p>
          <img src="https://cdn.myside.com.br/base/7da/9de/56f/balne__rio_cambori__-sc.jpg" alt="Ap1" />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
