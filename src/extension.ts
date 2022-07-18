// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as say from 'say';
import * as path from 'path';

// Function runs when extension is activated
export function activate(context: vscode.ExtensionContext) {
	//toRead can be changed out to be the default text file name to be spoken
	const location = path.join(vscode.workspace.workspaceFolders[0].uri.path,'toRead.txt')
	const toRead = vscode.Uri.file(location)
	
	let speak = vscode.commands.registerCommand('TextToSpeech.speak', () => {
		vscode.workspace.openTextDocument(toRead).then((document)=>{
			let text = document.getText();
			say.speak(text)
		})
  })

  let stop = vscode.commands.registerCommand('TextToSpeech.stop',() =>{
	say.stop();
  })
}



// this method is called when your extension is deactivated
export function deactivate() {

}
