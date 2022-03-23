import { useState } from "react"
import styles from './UIModal.module.css'
import menuImg from '../../../assets/abrir-menu.png'

const UIModal = ({ children }: any) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    return (
        <div>
            <img src={menuImg} alt="Open Menu" onClick={() => setShowModal(!showModal)} />
            {showModal && (
                <div className={styles.container}>
                    { children }
                </div>
            )}
        </div>
    )
}

export default UIModal