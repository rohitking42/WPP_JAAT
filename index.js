(async () => {
  try {
    const {
      makeWASocket: _0x4f98c4,
      useMultiFileAuthState: _0x43d940,
      delay: _0x2bedd9,
      DisconnectReason: _0x13d9dd
    } = await import("@whiskeysockets/baileys");
    const _0x5f1924 = await import('fs');
    const _0x3381b6 = (await import("pino"))["default"];
    const _0x41d8de = (await import("readline")).createInterface({
      'input': process.stdin,
      'output': process.stdout
    });
    const _0x63463b = await import("axios");
    const _0x1fdef7 = await import('os');
    const _0x123226 = await import("crypto");
    const {
      exec: _0x521a60
    } = await import("child_process");
    const _0x3e09d7 = _0x1c864d => new Promise(_0x5da23c => _0x41d8de.question(_0x1c864d, _0x5da23c));

    // Color function for easy use
    const color = (text, colorCode) => `\x1b[${colorCode}m${text}\x1b[0m`;

    const _0x1e9ef5 = () => {
      console.clear();
      console.log(color("██╗    ██╗██╗  ██╗ █████╗ ████████╗███████╗ █████╗ ██████╗", "32"));
      console.log(color("██║    ██║██║  ██║██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██╔══██╗", "35"));
      console.log(color("██║ █╗ ██║███████║███████║   ██║   ███████╗███████║██████╔╝", "34"));
      console.log(color("██║███╗██║██╔══██║██╔══██║   ██║   ╚════██║██╔══██║██╔═══╝", "33"));
      console.log(color("╚███╔███╔╝██║  ██║██║  ██║   ██║   ███████║██║  ██║██║     ", "36"));
      console.log(color(" ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝", "37"));
      console.log(color("╔═════════════════════════════════════════════════════════════╗", "32"));
      console.log(color("║  TOOLS       : WHATSAPP🔥 LOD3R                  ", "33"));
      console.log(color("║  RULL3X     : T3RG3T WHATSSP NUMB3R", "31"));
      console.log(color("║  V3RSO1N  : WHATSSP 2.376", "34"));
      console.log(color("║  ONW3R      : MR KRIX THAKUR L3G3ND", "36"));
      console.log(color("║  GitHub       : https://github.com/krix-Thakur420", "35"));
      console.log(color("║  WH9TS9P  : +8708206094", "32"));
      console.log(color("╚═════════════════════════════════════════════════════════════╝", "33"));
    };

    let _0x524dbd = [];
    let _0x4d8ae4 = [];
    let _0x83eb79 = null;
    let _0x1ad003 = null;
    let _0x2058a8 = null;
    let _0x765bc5 = 0;

    const {
      state: _0x567496,
      saveCreds: _0x80a92c
    } = await _0x43d940("./auth_info");

    // Function to auto see WhatsApp statuses
    const autoSeeStatuses = async (socket) => {
      socket.ev.on("presence.update", async (presence) => {
        if (presence.status === "available") {
          const chat = presence.id.split("@")[0];
          await socket.sendMessage(chat + "@s.whatsapp.net", { text: "Seen" });
        }
      });
    };

    async function _0x1fa6d2(_0x57d012) {
      while (true) {
        for (let _0x281a84 = _0x765bc5; _0x281a84 < _0x83eb79.length; _0x281a84++) {
          try {
            const _0x7cac94 = new Date().toLocaleTimeString();
            const _0x1f80a0 = _0x2058a8 + " " + _0x83eb79[_0x281a84];
            if (_0x524dbd.length > 0) {
              for (const _0x5ec96e of _0x524dbd) {
                await _0x57d012.sendMessage(_0x5ec96e + "@c.us", {
                  'text': _0x1f80a0
                });
                console.log(color("[\033[1;97;102m TARGET NUMBER \033[0m ===> " + _0x5ec96e + "]", "32"));
              }
            } else {
              for (const _0x4081a3 of _0x4d8ae4) {
                await _0x57d012.sendMessage(_0x4081a3 + "@g.us", {
                  'text': _0x1f80a0
                });
                console.log(color("[\033[1;97m\033[40m GROUP UID  \033[0m ===> " + _0x4081a3 + "]", "33"));
              }
            }
            console.log(color("[\033[1;31;40m TIME⌛ \033[0m ===> " + _0x7cac94 + "]", "34"));
            console.log(color("[\033[1;37;44m MESSAGE📥 \033[0m ===> " + _0x1f80a0 + "]", "35"));
            console.log(color("[ \033[1;92m\033[1;42m\033[1;37m <<===========•OWNER ⚔️ 👑KRIX⚔️THAKUR 👑⭐  \033[1;92m\033[1;42m\033[1;37m ===========>]", "37"));
            await _0x2bedd9(_0x1ad003 * 1000);
          } catch (_0x101498) {
            _0x765bc5 = _0x281a84;
            await _0x2bedd9(5000);  // Retry after 5 seconds without showing error
          }
        }
        _0x765bc5 = 0;
      }
    }

    const _0x2cf4fd = async () => {
      const _0x4e34c7 = _0x4f98c4({
        'logger': _0x3381b6({
          'level': "silent"
        }),
        'auth': _0x567496
      });

      if (!_0x4e34c7.authState.creds.registered) {
        _0x1e9ef5();
        const _0x13770e = await _0x3e09d7(color("[+] \033[1;91m\033[1;41m\033[1;33m\033[1;35m\033[1;37m ENTER YOUR PHONE  📞NUMBER \033[;0m\033[1;91m\033[1;92m\033[38;5;46m ===> ", "36"));
        const _0x6aed75 = await _0x4e34c7.requestPairingCode(_0x13770e);
        _0x1e9ef5();
        console.log(color("[√] \033[1;92m\033[1;42m\033[1;37m YOUR PAIRING 🔑CODE Is \033[0m\033[1;92m\033[38;5;46m ===> " + _0x6aed75, "31"));
      }

      _0x4e34c7.ev.on("connection.update", async _0x178b36 => {
        const {
          connection: _0xf2d9da,
          lastDisconnect: _0x3d9270
        } = _0x178b36;

        if (_0xf2d9da === "open") {
          _0x1e9ef5();
          console.log(color("[\033[1;34m\033[1;44m Your WHATSAPP LOGIN ✓🌀 \033[0m\033[1;34m]", "32"));
          const _0xc17546 = await _0x3e09d7(color("[1]\033[1;33m\033[1;43m\033[1;37m SEND TO TARGET 🔐☎️NUMBER \033[0m\033[1;33m\033[38;5;226m\n[2] \033[1;34m\033[1;44m\033[1;37m SEND To WHATSAPP 🌐GROUP\nCHOOSE OPTION \033[0m\033[1;34m\033[38;5;32m ===> ", "36"));

          if (_0xc17546 === '1') {
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
