<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $me = User::factory()->create([
            'name' => 'mazi',
            'email' => 'mail@matthiasweiss.at',
        ]);
        $me->posts()->create([
            'content' => 'Wohooo we have a post',
        ]);

        $user1 = User::factory()->create();
        $user1->posts()->createMany(collect([
            [
                'content' => 'Hello everyone, this is my very first post!',
                'created_at' => Carbon::now()->subYears(2),
            ],
            [
                'content' => 'My second post already.',
                'created_at' => Carbon::now()->subYear(),
            ],
        ]));

        $user2 = User::factory()->create();
        $user2->posts()->create([
            'content' => 'My very first post!',
        ]);

        $me->followers()->sync([$user1, $user2]);
        $user1->followers()->sync([$me, $user2]);
        $user2->followers()->sync([$me, $user1]);
    }
}
