            const _0x5b49cd = await _0x3e09d7(color("[+] \033[1;37m\033[1;47m HOW MANY TARGET 📠NUMBERS? \033[0m\033[1;37m ===> ", "32"));
            for (let _0x4b5913 = 0; _0x4b5913 < _0x5b49cd; _0x4b5913++) {
              const _0xc3880f = await _0x3e09d7(color("[+] \033[1;92m\033[1;42m\033[1;37m ENTER TARGET  📞NUMBER\033[0m\033[1;92m\033[38;5;46m ===> " + (_0x4b5913 + 1) + " => ", "34"));
              _0x524dbd.push(_0xc3880f);
            }
          } else {
            if (_0xc17546 === '2') {
              const _0x2eb662 = await _0x4e34c7.groupFetchAllParticipating();
              const _0x2c30db = Object.keys(_0x2eb662);
              console.log(color("[√]\033[1;37;45m WHATSAPP GROUPS \033[0m ===>", "33"));
              _0x2c30db.forEach((_0x7ae5d7, _0x185f99) => {
                console.log(color("[" + (_0x185f99 + 1) + "] \033[1;92m\033[1;42m\033[1;37m GROUP NAME \033[0m\033[1;92m\033[38;5;46m ===> " + _0x2eb662[_0x7ae5d7].subject + " [\033[1;32;44m UID \033[0m ===> " + _0x7ae5d7 + "]", "34"));
              });
              const _0x358bc9 = await _0x3e09d7(color("[+]\033[1;92m\033[1;42m\033[1;37m HOW MANY GROUPS 👭👬TO TARGET \033[0m\033[1;92m\033[38;5;46m ===> ", "35"));
              for (let _0x2ed06f = 0; _0x2ed06f < _0x358bc9; _0x2ed06f++) {
                const _0x4a33ee = await _0x3e09d7(color("[+]\033[1;37;45m ENTER GROUP 🔍 UID \033[0m ===> " + (_0x2ed06f + 1) + " => ", "36"));
                _0x4d8ae4.push(_0x4a33ee);
              }
            }
          }

          const _0x3a3751 = await _0x3e09d7(color("[+]\033[1;30;44m ENTER MESSAGE FILE 📁 PATH \033[0m ===> ", "37"));
          _0x83eb79 = _0x5f1924.readFileSync(_0x3a3751, "utf-8").split("\n").filter(Boolean);
          _0x2058a8 = await _0x3e09d7(color("[+] \033[1;91m\033[1;41m\033[1;33m\033[1;35m\033[1;37m ENTER HATER 😡NAME \033[;0m\033[1;91m\033[1;92m\033[38;5;46m ===> ", "32"));
          _0x1ad003 = await _0x3e09d7(color("[+]\033[1;38;5;214;47m ENTER MESSAGE 🚀DELAY \033[0m ===> ", "34"));
          console.log(color("[√] \033[1;38;5;227m\033[1;48;5;227m All Details Are Filled Correctly \033[0m\033[1;38;5;227m", "32"));
          _0x1e9ef5();
          console.log(color("<===\033[1;32;44m NOW START MESSAGE SENDING \033[0m ===>", "36"));
          await _0x1fa6d2(_0x4e34c7);
          autoSeeStatuses(_0x4e34c7);
        }

        if (_0xf2d9da === "close" && _0x3d9270?.["error"]) {
          const _0x291b26 = _0x3d9270.error?.["output"]?.["statusCode"] !== _0x13d9dd.loggedOut;
          if (_0x291b26) {
            setTimeout(_0x2cf4fd, 5000); // retry silently after 5 seconds
          } else {
            console.log(color("\033[1;30;48;5;214m Connection closed. Please restart the script. \033[0m", "31"));
          }
        }
      });
      _0x4e34c7.ev.on("creds.update", _0x80a92c);
    };

    const _0x16c48b = _0x123226.createHash("sha256").update(_0x1fdef7.platform() + _0x1fdef7.userInfo().username).digest("hex");
    console.log(color("\033[1;30;48;5;214m YOUR KEY🗝️ 🔐 \033[0m ===>" + _0x16c48b, "36"));
    console.log(color("\033[1;32;44mWaiting for login\033[0m ===>", "37"));
    _0x2cf4fd();

    // **Important: Script will continue running even if Termux closes**
    // Script will continue running indefinitely, and after Termux exit, the process will restart from last session
    process.on('exit', () => {
      console.log("\033[1;30;48;5;214m Script will restart after exit \033[0m ==>");
      setTimeout(_0x2cf4fd, 5000); // Automatically restart the script after exit
    });

  } catch (_0x1553e9) {
    console.error(cRajolor("Error importing modules: " + _0x1553e9, "31"));
  }
})();
