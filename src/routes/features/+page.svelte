<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Condotta – Features</title>
	<meta name="description" content="About Condotta." />
</svelte:head>

<h1>Features</h1>

<p class="lead">Designed with the modern freelancer in mind and always growing.</p>

<section id="clients" class="core">
	<h2>Client Management</h2>
	<div class="split">
		<div class="text">
			<p>When you create a client in our program, it instantly creates the right file structure, allowing you to keep everything organised. The files structure lives on your computer, wherever you need it to be.</p>
			<p>For freelancers that deal with dozens of files, you can even link files for easy reference in the app.</p>
			<p>Easily see your workload, unpaid invoices and more just in one simple view.</p>
			<p>No more disorganised folders and lost files.</p>
		</div>
		<img src="{base}/images/condotta-client-view.png" alt="screenshot of condotta's client view" />
	</div>
</section>
<section id="email" class="core">
	<h2>Email</h2>
	<div class="split">
		<div class="text">
			<p>Condotta's in-built email client allows you to import your current existing email accounts for a seamless email experience.</p>
			<p>Everything you're used to with email is already here: inboxes, folders, drafts etc as well as seamless integration with all of the other features that makes condotta great.</p>
			<p>Created an invoice? Send it straight from that view. Fire off documents directly with no additional unnecessary steps. Even create a task directly from your email. And if you do need to send a rich or plain text email, you can do that too.</p>
			<p>Your emails are all yours, we store nothing, not even in the Condotta backups. Safe, simple and secure.</p>
		</div>
		<img src="{base}/images/condotta-client-view.png" alt="screenshot of condotta's client view" />
	</div>
</section>
<section id="time" class="core">
	<h2>Time Management</h2>
	<div class="split">
		<div class="text">
			<p>As a freelancer, time is everything, and it's easy to let time - and money - get away from you. Our timekeeping suite is designed to make that a thing of the past.</p>
			<p>Need to track how much time you've spent on a task? Our tool allows you to link a timer to a task, set an hourly rate and add it to an invoice with just a click.</p>
			<p>Got a budget and don't want to cut too far into your margins? We've got one for that, too. With our Countdown tool, you can set a budget along with a rate and it'll tell you the most time you can spend before you eat into your budget. Set your coundown and get an alert when you're running over time.</p>
			<p>Regaining control of your day is just a click away.</p>
		</div>
		<img src="{base}/images/condotta-time-management-4.png" alt="Placeholder illustration" />
	</div>
</section>
<section id="finances" class="core">
	<h2>Finances</h2>
	<div class="split">
		<div class="text">
			<p>It's never fun, but money management is something we all have to do, but Condotta makes it easy to keep an eye on your finances.</p>
			<p>Condotta's finance suite allows you to track your income and expenses in individual detail, attach receipts and sync to invoices.</p>
			<p>You can also import your bank statements as a .csv or .qif file for speed and accuracy, limiting human error and keeping things simple.</p>
			<p>Your financial information is kept on your device, none of it is shared with Condotta or any third parties. Safe, secure and simple.</p>
		</div>
		<img src="{base}/images/condotta-finance-view-2.png" alt="Placeholder illustration" />
	</div>
</section>
<section id="calendar" class="core">
	<h2>Calendar</h2>
	<div class="split">
		<div class="text">
			<p>What would an all-in-one freelancer app be without a calendar at its core? </p>
			<p>Condotta's Calendar links with all other features in the app, including Tasks, Projects, Clients and even Emails.</p>
			<p>Drag and Drop functionality keeps things easy and colour coding lets you see what's important at a glance.</p>
			<p>Import existing calendars to keep on top of things and keep a clear view of your day, week and month ahead.</p>
		</div>
		<img src="{base}/images/condotta-calendar-view.png" alt="Condotta Calendar View" />
	</div>
</section>
<section id="kanban" class="pro">
	<h2>Kanban Board</h2>
	<div class="split">
		<div class="text">
			<p>The Kanban board feature allows you to track and monitor your progress for individual task as well as projects. Searchable for easy access and easy to use.</p>
			<p>Click and drag items or mark them complete in the event view, either way, your progress remains updated.</p>
			<p>Seamless links with the calendar, clients and dashboard means you're fully locked in at all times.</p>
			
		</div>
		<img src="{base}/images/condotta-kanban-board.png" alt="Placeholder illustration" />
	</div>
</section>
<section id="invoicing" class="core">
	<h2>Invoicing</h2>
	<div class="split">
		<div class="text">
			<p>Sending and chasing invoices - the best bit about freelancing!</p>
			<p>All jokes aside, Condotta might be the closest thing to nailing the process. We've got your clients, tasks, time worked, along with your rates all powering the invoice generator, making it quicker and easier than ever.</p>
			<p>Mail your invoices off directly within the app and get alerted when they're past due. You can even link them directly to the finance tool as an income entry and keep a two-way link at your fingertips.</p>
			<p>Talk about taking the stress out of getting paid!</p>
			
		</div>
		<img src="{base}/images/condotta-invoice-view.png" alt="Placeholder illustration" />
	</div>
</section>

<style>
	.lead {
		font-size: 1.2rem;
		color: var(--muted);
	}
	p {
		max-width: 42rem;
	}
	section {
		margin-top: 4rem;
		max-width: 100dvw;

	}
	
	.text h2:first-child {
		margin-top: 0;
	}
	
</style>
