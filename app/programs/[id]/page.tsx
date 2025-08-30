import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	ArrowLeft,
	Dumbbell,
	AppleIcon,
	Users,
	Clock,
	Target,
	ShieldIcon,
	Calendar,
	Activity
} from 'lucide-react';
import Link from 'next/link';
import { USER_PROGRAMS } from '@/constants';

interface ProgramDetailsPageProps {
	params: Promise<{ id: string }>;
}

const ProgramDetailsPage = async ({ params }: ProgramDetailsPageProps) => {
	const { id } = await params;
	const programId = parseInt(id);
	const program = USER_PROGRAMS.find(p => p.id === programId);

	if (!program) {
		notFound();
	}

	return (
		<div className="w-full pb-24 pt-6 relative">
			<div className="container mx-auto max-w-6xl px-4">
				{/* Back button */}
				<div className="mb-8">
					<Link href="/">
						<Button
							variant="ghost"
							className="gap-2"
						>
							<ArrowLeft className="h-4 w-4" />
							Back to Programs
						</Button>
					</Link>
				</div>

				{/* Header */}
				<div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg overflow-hidden mb-8">
					<div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/70">
						<div className="flex items-center gap-2">
							<div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
							<span className="text-sm text-primary font-medium">
								Program Details
							</span>
						</div>
						<div className="text-sm text-muted-foreground">
							USER.{program.id}
						</div>
					</div>

					<div className="p-8">
						<div className="flex items-center gap-6 mb-6">
							<div className="h-24 w-24 rounded-full overflow-hidden border border-border">
								{}
								<img
									src={
										program.profilePic
									}
									alt={`${program.first_name}`}
									className="h-full w-full object-cover"
								/>
							</div>
							<div>
								<h1 className="text-3xl font-bold text-foreground mb-2">
									{
										program.first_name
									}
									<span className="text-primary">
										.exe
									</span>
								</h1>
								<div className="flex items-center gap-4 text-sm text-muted-foreground">
									<div className="flex items-center gap-1">
										<Users className="h-4 w-4" />
										{
											program.age
										}{' '}
										years
										old
									</div>
									<div className="flex items-center gap-1">
										<Activity className="h-4 w-4" />
										{
											program.workout_days
										}{' '}
										days/week
									</div>
									<div className="flex items-center gap-1">
										<Target className="h-4 w-4" />
										{
											program.fitness_level
										}
									</div>
								</div>
							</div>
						</div>

						{/* User stats */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							<div className="bg-background/50 rounded-lg p-4 border border-border">
								<div className="text-sm text-muted-foreground">
									Height
								</div>
								<div className="text-lg font-semibold text-foreground">
									{
										program.height
									}
								</div>
							</div>
							<div className="bg-background/50 rounded-lg p-4 border border-border">
								<div className="text-sm text-muted-foreground">
									Weight
								</div>
								<div className="text-lg font-semibold text-foreground">
									{
										program.weight
									}
								</div>
							</div>
							<div className="bg-background/50 rounded-lg p-4 border border-border">
								<div className="text-sm text-muted-foreground">
									Equipment
								</div>
								<div className="text-lg font-semibold text-foreground">
									{
										program.equipment_access
									}
								</div>
							</div>
							<div className="bg-background/50 rounded-lg p-4 border border-border">
								<div className="text-sm text-muted-foreground">
									Dietary
								</div>
								<div className="text-lg font-semibold text-foreground">
									{
										program.dietary_restrictions
									}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Main content grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Workout Plan */}
					<Card className="bg-card/90 backdrop-blur-sm border border-border">
						<CardHeader className="border-b border-border">
							<div className="flex items-center gap-3">
								<div className="p-2 rounded-md bg-primary/10 text-primary">
									<Dumbbell className="h-6 w-6" />
								</div>
								<div>
									<CardTitle className="text-xl text-foreground">
										{
											program
												.workout_plan
												.title
										}
									</CardTitle>
									<p className="text-sm text-muted-foreground mt-1">
										{
											program.fitness_goal
										}{' '}
										•{' '}
										{
											program.workout_days
										}{' '}
										days
										per
										week
									</p>
								</div>
							</div>
						</CardHeader>
						<CardContent className="p-6">
							<div className="space-y-4">
								<div>
									<h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
										<Calendar className="h-4 w-4" />
										Weekly
										Schedule
									</h3>
									<div className="space-y-2">
										{program.workout_plan.weekly_schedule.map(
											(
												session,
												index
											) => (
												<div
													key={
														index
													}
													className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border"
												>
													<div>
														<div className="font-medium text-foreground">
															{
																session.day
															}
														</div>
														<div className="text-sm text-muted-foreground">
															{
																session.focus
															}
														</div>
													</div>
													<div className="flex items-center gap-2 text-sm text-primary">
														<Clock className="h-4 w-4" />
														{
															session.duration
														}
													</div>
												</div>
											)
										)}
									</div>
								</div>
								<div className="pt-4 border-t border-border">
									<h3 className="font-semibold text-foreground mb-2">
										Program
										Description
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{
											program
												.workout_plan
												.description
										}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Diet Plan */}
					<Card className="bg-card/90 backdrop-blur-sm border border-border">
						<CardHeader className="border-b border-border">
							<div className="flex items-center gap-3">
								<div className="p-2 rounded-md bg-secondary/10 text-secondary">
									<AppleIcon className="h-6 w-6" />
								</div>
								<div>
									<CardTitle className="text-xl text-foreground">
										{
											program
												.diet_plan
												.title
										}
									</CardTitle>
									<p className="text-sm text-muted-foreground mt-1">
										{
											program
												.diet_plan
												.daily_calories
										}{' '}
										•
										Optimized
										nutrition
									</p>
								</div>
							</div>
						</CardHeader>
						<CardContent className="p-6">
							<div className="space-y-4">
								{/* Macros */}
								<div>
									<h3 className="font-semibold text-foreground mb-3">
										Macronutrients
									</h3>
									<div className="grid grid-cols-3 gap-3">
										<div className="bg-background/50 rounded-lg p-3 border border-border text-center">
											<div className="text-lg font-semibold text-primary">
												{
													program
														.diet_plan
														.macros
														.protein
												}
											</div>
											<div className="text-xs text-muted-foreground">
												Protein
											</div>
										</div>
										<div className="bg-background/50 rounded-lg p-3 border border-border text-center">
											<div className="text-lg font-semibold text-secondary">
												{
													program
														.diet_plan
														.macros
														.carbs
												}
											</div>
											<div className="text-xs text-muted-foreground">
												Carbs
											</div>
										</div>
										<div className="bg-background/50 rounded-lg p-3 border border-border text-center">
											<div className="text-lg font-semibold text-foreground">
												{
													program
														.diet_plan
														.macros
														.fats
												}
											</div>
											<div className="text-xs text-muted-foreground">
												Fats
											</div>
										</div>
									</div>
								</div>

								{/* Meal Examples */}
								<div>
									<h3 className="font-semibold text-foreground mb-3">
										Sample
										Meals
									</h3>
									<div className="space-y-2">
										{program.diet_plan.meal_examples.map(
											(
												meal,
												index
											) => (
												<div
													key={
														index
													}
													className="p-3 bg-background/50 rounded-lg border border-border"
												>
													<div className="font-medium text-foreground">
														{
															meal.meal
														}
													</div>
													<div className="text-sm text-muted-foreground mt-1">
														{
															meal.example
														}
													</div>
												</div>
											)
										)}
									</div>
								</div>

								<div className="pt-4 border-t border-border">
									<h3 className="font-semibold text-foreground mb-2">
										Nutrition
										Strategy
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{
											program
												.diet_plan
												.description
										}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Additional Info */}
				<div className="mt-8">
					<Card className="bg-card/90 backdrop-blur-sm border border-border">
						<CardHeader className="border-b border-border">
							<div className="flex items-center gap-3">
								<div className="p-2 rounded-md bg-primary/10 text-primary">
									<ShieldIcon className="h-6 w-6" />
								</div>
								<CardTitle className="text-xl text-foreground">
									Additional
									Information
								</CardTitle>
							</div>
						</CardHeader>
						<CardContent className="p-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<h3 className="font-semibold text-foreground mb-2">
										Injuries
										&
										Considerations
									</h3>
									<p className="text-sm text-muted-foreground">
										{program.injuries ===
										'None'
											? 'No reported injuries'
											: program.injuries}
									</p>
								</div>
								<div>
									<h3 className="font-semibold text-foreground mb-2">
										AI
										Safety
										Protocols
									</h3>
									<p className="text-sm text-muted-foreground">
										This
										program
										has
										been
										designed
										with
										AI
										safety
										protocols
										to
										ensure
										all
										exercises
										and
										nutrition
										recommendations
										are
										appropriate
										for
										the
										user&apos;s
										fitness
										level
										and
										health
										considerations.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* CTA */}
				<div className="mt-12 text-center">
					<Link href="/generate-program">
						<Button
							size="lg"
							className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
						>
							Generate Your Own
							Program
							<Dumbbell className="ml-2 h-5 w-5" />
						</Button>
					</Link>
					<p className="text-muted-foreground mt-4">
						Get your personalized
						AI-generated fitness program
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProgramDetailsPage;
