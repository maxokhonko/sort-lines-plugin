import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('sort-lines-plugin.sortAlphabetically', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        editor.edit(editBuilder => {
            for (const selection of editor.selections) {
                if (selection.isEmpty) {
                    continue;
                }

                const text = editor.document.getText(selection);
                const eol = editor.document.eol === vscode.EndOfLine.CRLF ? '\r\n' : '\n';
                const lines = text.split(eol);

                lines.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

                const sortedText = lines.join(eol);

                editBuilder.replace(selection, sortedText);
            }
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}