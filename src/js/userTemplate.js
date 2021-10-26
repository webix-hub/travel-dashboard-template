export const userTemplate = {
	borderless: true,
	css: "user",
	width: 188,
	height: 44,
	popup: "user_menu",
	template() {
		const html = `
        <div class="userInner">
            <span class="userAvatar">
                <img class="userImage" src="./avatar/avatar.png">
            </span>
            <span class="userName">
                <span>Amanda Roberts</span>
                <span class="mdi mdi-menu-down mdi-24px"></span>
            </span>
        </div>`;
		return html;
	},
	onClick: {
		user() {
			const node = this.$view;
			const menu = webix.$$("user_menu");
			if (!menu.isVisible()) {
				menu.show(node);
			}
			else menu.hide();
		}
	}
};
