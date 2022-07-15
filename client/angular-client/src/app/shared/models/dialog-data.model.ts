/**
 * type definition for Dialog Data model
 */
interface IDialogData {
    title: string;
    disableClose?: boolean;
    content?: object;
    yesButton?: boolean;
    onSubmit?: Function;
}

export default IDialogData;
