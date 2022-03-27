import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
type Props = any;

const TextEditor = ({ editorState, setEditorState }: Props) => {
	return (
		<Editor
			editorState={editorState}
			toolbarClassName="toolbarClassName"
			wrapperClassName="wrapperClassName"
			editorClassName="editorClassName"
			onEditorStateChange={setEditorState}
		/>
	);
};

export default TextEditor;
