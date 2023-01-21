
import { Card } from "react-bootstrap";
import useStyles from "./ScannerGraph.style";
import allure from "./scannerIcon/allure.png"
import openApi from "./scannerIcon/openAPI.png"
import junit from "./scannerIcon/junit.png"
import prisma from "./scannerIcon/prisma.png"
import blackduck from "./scannerIcon/blackduck.png"
import { IProps } from "../../../types/types";
export const GraphHeader = ({ scannerType, scannerName, sum }: IProps) => {
    const iconsByScannerName = {
        "Allure": allure,
        "OpenApi": openApi,
        "Junit": junit,
        "Prisma": prisma,
        "BlackDuck": blackduck
    }
    const typeColor = {
        "SECURITY": '#1D8CF8',
        "CODE ANALYZER": '#FD5D93',
        "TEST_REPORT": '#00F2C3'
    }
    type typeKey = keyof typeof typeColor;
    type iconKey = keyof typeof iconsByScannerName;

    const classes = useStyles();

    return (

        <Card.Header className={classes.header}>
            <div className={classes.headerCard}>
                <Card.Title className={classes.nameCard}>{scannerName} scans </Card.Title>
                <div className={classes.iconCard}>
                    <Card.Img src={iconsByScannerName[scannerName as iconKey]} className={classes.icon} />
                    <Card.Text className={classes.sum}>{sum}</Card.Text>
                </div>
            </div>
            <div style={{ backgroundColor: typeColor[scannerType as typeKey], borderRadius: 5, padding: 3, fontWeight: 'bold', fontSize: 13 }} className={classes.type}><label>{scannerType}</label></div>
        </Card.Header>
    )
}