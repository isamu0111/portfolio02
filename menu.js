// ===== ハンバーガーメニュー(開く・閉じる) =====
const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');

// 開く(true)・閉じる(false)を切り替える
function setMenu(open) {
	header.classList.toggle('is-open', open);
	hamburger.setAttribute('aria-expanded', open);
	hamburger.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
}

// ボタンを押したら開閉
hamburger.addEventListener('click', () => {
	setMenu(!header.classList.contains('is-open'));
});

// メニューの中のリンクを押したら閉じる
document.querySelectorAll('.header .nav a').forEach(link => {
	link.addEventListener('click', () => setMenu(false));
});

// Escキーで閉じる
document.addEventListener('keydown', e => {
	if (e.key === 'Escape') setMenu(false);
});

// 画面を広げてタブレット・PC表示(769px以上)になったら、開いたままにならないよう閉じる
window.matchMedia('(min-width: 769px)').addEventListener('change', e => {
	if (e.matches) setMenu(false);
});
