import style from './Home.module.css'

export function Home() {
  return (
    <>
      <div className={style.infoUser}>
        <section>
          <h1 className={style.nameUser}>Ezequiel Brilhante</h1>
          <h3 className={style.roleUser}>Frontend Developer</h3>
        </section>
        <section>
          <img className={style.img} src="https://github.com/ezequielbrilhantedev.png" alt="" />
        </section>
      </div>
    </>
  )
}