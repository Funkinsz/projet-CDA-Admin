import s from "../../User/user.module.scss";

export default function OneAdds({ add, key, updateOneAdd, deleteAdd}) {
    return (
        <tr className="d-flex jcsb">
            <td key={key} className={`${s.td_id}`}>{add.id_ad_pro}</td>
            <td>{add.title_ad_pro}</td>
            <td className={`${s.td_content}`}>{add.content_ad_pro}</td>
            <td className={`${s.td_id}`}>{add.price_ad_pro} €</td>
            <td className={`${s.td_id}`}>{add.sono === 1 ? "✔️" : "❌"}</td>
            <td className={`${s.td_id}`}>{add.number_art}</td>
            <td>
                <button className={`${s.btn_update}`}>
                <i className="fa-solid fa-calendar-plus"></i>
                </button>
                <button className={`${s.btn_delete}`}>
                <i className="fa-solid fa-calendar-xmark"></i>
                </button>
            </td>
        </tr>
    )
}