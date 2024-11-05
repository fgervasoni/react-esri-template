import { Map } from "../components/Map";
import { useTranslation } from "react-i18next";

export default function Index() {

    const [t] = useTranslation('common');

    return (
        <>
            <h1 className="content-center h-12 text-4xl font-bold text-center text-gray-800">
                {t('title')}
            </h1>
            <Map />
        </>
    )
}