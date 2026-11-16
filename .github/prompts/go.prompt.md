---
name: Go
description: "Review and commit the current task's changes safely when the user invokes /go."
agent: agent
---

Review and commit the relevant changes for the current task.

1. Inspect the repository, current branch, and working-tree status. Review the complete diff, including staged and unstaged changes.
2. Do not overwrite or include unrelated user changes. Stage only files relevant to the current task.
3. Run the smallest relevant validation for the changes. If validation fails, report the failure and do not commit unless the user explicitly asks to proceed.
4. Choose a concise commit message that describes the changes. Create a local commit on the current branch; do not push unless the user asks.
5. If local Git is unavailable, explain that. If an already-authenticated GitHub API tool is available and the task clearly requires committing to the named remote repository, use that API without opening a browser or initiating integrated browser authentication. Otherwise, stop and explain what is needed.
6. Verify the resulting commit and report its hash, message, and the files included. Never commit secrets.
