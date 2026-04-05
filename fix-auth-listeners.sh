#!/bin/bash

# Fix all onAuthStateChanged listeners to wait for persistenceReady

# messagerie.html
sed -i '' 's/        auth\.onAuthStateChanged(async user => {/        persistenceReady.then(() => {\n            auth.onAuthStateChanged(async user => {/' messagerie.html
sed -i '' 's/            }\n        });$/            }\n        });\n        }).catch(err => {\n            console.error("Persistence init error:", err);\n            auth.onAuthStateChanged(async user => {\n                if (user) {\n                    currentUser = user;\n                    try {\n                        const snapshot = await db.ref("users\/" + user.uid).once("value");\n                        currentUserProfile = snapshot.val();\n                        if (currentUserProfile && currentUserProfile.pseudo) {\n                            document.getElementById("loginRequired").style.display = "none";\n                            document.getElementById("main-content").style.display = "flex";\n                            initApp();\n                        } else {\n                            window.location.href = "compte.html";\n                        }\n                    } catch (e) {\n                        console.error("Erreur profil:", e);\n                        window.location.href = "compte.html";\n                    }\n                } else {\n                    document.getElementById("loginRequired").style.display = "flex";\n                    document.getElementById("main-content").style.display = "none";\n                }\n            });\n        });/' messagerie.html

echo "✅ Fixed onAuthStateChanged listeners"
